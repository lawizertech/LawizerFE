import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/server';
import { z } from 'zod';

const schema = z.object({
  caseId: z.string().uuid(),
  limit: z.coerce.number().int().positive().default(30),
  before: z.string().optional().nullable(),
});

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const caseId = searchParams.get('caseId');
    const limitParam = searchParams.get('limit');
    const before = searchParams.get('before');

    const parsed = schema.safeParse({
      caseId,
      limit: limitParam ? parseInt(limitParam, 10) : undefined,
      before,
    });

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid query parameters' }, { status: 400 });
    }

    const { caseId: validatedCaseId, limit, before: validatedBefore } = parsed.data;
    const admin = createAdminClient();

    // ── Authorization: extract and verify caller identity ──────────────────
    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await admin.auth.getUser(token);

    if (authError || !user) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }

    // ── Verify caller is a case participant or admin ──────────────────────
    const { data: caseData, error: caseError } = await admin
      .from('cases')
      .select('client_id, professional_id')
      .eq('id', validatedCaseId)
      .single();

    if (caseError || !caseData) {
      return NextResponse.json({ error: 'Case not found' }, { status: 404 });
    }

    const { data: profile } = await admin
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    const isParticipant =
      caseData.client_id === user.id || caseData.professional_id === user.id;
    const isAdmin = profile?.role === 'admin';

    if (!isParticipant && !isAdmin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // ── Fetch messages (exclude soft-deleted) ─────────────────────────────
    let query = admin
      .from('chat_messages')
      .select('*')
      .eq('case_id', validatedCaseId)
      .is('deleted_at', null)
      .order('created_at', { ascending: false });

    if (validatedBefore) {
      query = query.lt('created_at', validatedBefore);
    }

    const { data: messages, error: messagesError } = await query.limit(limit);

    if (messagesError) {
      console.error('Failed to fetch chat history:', messagesError);
      return NextResponse.json({ error: 'Failed to fetch chat history' }, { status: 500 });
    }

    return NextResponse.json(messages || []);
  } catch (err: any) {
    console.error('GET /api/chat/history error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
