-- ============================================================
-- Migration: Create consultation_bookings table
-- 
-- To run this migration:
--   1. Go to your Supabase Dashboard → SQL Editor
--   2. Paste this entire file and execute
--   
-- This table stores founder consultation slot bookings with:
--   - A unique constraint on slot_start to prevent double bookings
--   - Status tracking: pending → confirmed (or expired)
--   - Links to cases and payments for the existing flow
-- ============================================================

CREATE TABLE IF NOT EXISTS consultation_bookings (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Who booked
  user_id       UUID REFERENCES profiles(id) ON DELETE SET NULL,
  user_name     TEXT NOT NULL,
  user_phone    TEXT NOT NULL,
  reason        TEXT NOT NULL,
  
  -- Slot timing (stored in UTC)
  slot_start    TIMESTAMPTZ NOT NULL,
  slot_end      TIMESTAMPTZ NOT NULL,
  timezone      TEXT NOT NULL DEFAULT 'Asia/Kolkata',
  
  -- Booking lifecycle
  status        TEXT NOT NULL DEFAULT 'pending'
                CHECK (status IN ('pending', 'confirmed', 'expired', 'cancelled')),
  
  -- Payment references
  razorpay_order_id   TEXT,
  razorpay_payment_id TEXT,
  case_id             UUID,
  
  -- Meeting / video call
  meeting_id    TEXT,   -- Stream.io meeting ID for /meet/[meetingId]
  
  -- Timestamps
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  confirmed_at  TIMESTAMPTZ,
  expires_at    TIMESTAMPTZ,  -- When a pending booking expires
  
  -- Prevent double booking on the same slot_start (only for active bookings)
  CONSTRAINT unique_active_slot UNIQUE (slot_start)
);

-- Index for fast availability lookups
CREATE INDEX IF NOT EXISTS idx_consultation_bookings_slot_start 
  ON consultation_bookings (slot_start);

CREATE INDEX IF NOT EXISTS idx_consultation_bookings_status 
  ON consultation_bookings (status);

CREATE INDEX IF NOT EXISTS idx_consultation_bookings_week 
  ON consultation_bookings (slot_start, status);

-- Partial unique index: only enforce uniqueness for non-expired/cancelled bookings
-- This allows re-booking a slot after it was expired or cancelled
DROP INDEX IF EXISTS unique_active_slot_partial;
CREATE UNIQUE INDEX unique_active_slot_partial 
  ON consultation_bookings (slot_start) 
  WHERE status IN ('pending', 'confirmed');

-- Remove the table-level constraint since partial index handles it
ALTER TABLE consultation_bookings DROP CONSTRAINT IF EXISTS unique_active_slot;

-- Enable RLS
ALTER TABLE consultation_bookings ENABLE ROW LEVEL SECURITY;

-- Policy: users can read their own bookings
CREATE POLICY "Users can view own bookings" ON consultation_bookings
  FOR SELECT USING (auth.uid() = user_id);

-- Policy: service role can do everything (for API routes using createAdminClient)
-- Service role bypasses RLS by default, so no explicit policy needed

COMMENT ON TABLE consultation_bookings IS 'Stores founder consultation slot bookings with pending/confirmed/expired lifecycle';
COMMENT ON COLUMN consultation_bookings.slot_start IS 'UTC timestamp of when the consultation starts';
COMMENT ON COLUMN consultation_bookings.status IS 'pending=held for payment, confirmed=paid, expired=payment timed out, cancelled=user/admin cancelled';
