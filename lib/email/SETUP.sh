#!/bin/bash
# Quick Setup Guide for Callback Email Feature
# Run this script or follow the steps manually

echo "🚀 Lawizer Callback Email Feature - Quick Setup"
echo "================================================"
echo ""

# Step 1: Install dependencies
echo "📦 Step 1: Installing dependencies..."
echo "Run: npm install nodemailer"
echo ""

# Step 2: Create .env.local
echo "⚙️  Step 2: Setting up environment variables..."
echo "Create .env.local file from .env.example"
echo ""

# Step 3: Gmail Setup (Recommended)
echo "📧 Step 3: Gmail Configuration (Recommended for Dev)"
echo "1. Go to: https://myaccount.google.com/security"
echo "2. Enable '2-Step Verification'"
echo "3. Generate 'App Password' for Mail"
echo "4. Copy the 16-character password"
echo ""

# Step 4: Update .env.local
echo "✏️  Step 4: Update .env.local with:"
echo ""
echo "EMAIL_HOST=smtp.gmail.com"
echo "EMAIL_PORT=587"
echo "EMAIL_USER=admin@lawizer.com"
echo "EMAIL_PASS=xxxx-xxxx-xxxx-xxxx  (your app password)"
echo "EMAIL_FROM=admin@lawizer.com"
echo ""

# Step 5: Test
echo "🧪 Step 5: Test the setup"
echo "Visit: http://localhost:3000/api/test-email"
echo "Or make a callback request as a logged-in user"
echo ""

echo "✅ Setup Complete!"
echo ""
echo "📚 Full Documentation: lib/email/README.md"
echo "⚙️  Configuration: .env.example"
echo ""
