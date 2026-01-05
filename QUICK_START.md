# Quick Start Guide - Supabase Integration

## What Changed?

Your team management now uses **Supabase** (a real database) instead of localStorage. This means:
- ✅ Teams are shared across all users
- ✅ Real-time team member updates
- ✅ Maximum 3 members per team (enforced)
- ✅ Team data persists across browsers

## Setup Steps

### 1. Create Supabase Project (5 minutes)

1. Go to https://supabase.com/ and sign in
2. Click "New Project"
3. Name it `sitnovate-hackathon`
4. Choose a region and password
5. Wait for project to be created

### 2. Get Your Credentials

In Supabase dashboard:
1. Go to **Settings** > **API**
2. Copy **Project URL** 
3. Copy **anon public** key

### 3. Add to .env File

```env
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

### 4. Create Database Tables

1. In Supabase, go to **SQL Editor**
2. Click "New Query"
3. Open the file `supabase-schema.sql` in your project
4. Copy ALL the SQL code
5. Paste into Supabase SQL Editor
6. Click "Run" (or Ctrl+Enter)

You should see: "Success. No rows returned"

### 5. Verify Tables Created

Go to **Table Editor** in Supabase. You should see:
- ✅ `users` table
- ✅ `teams` table

### 6. Test Locally

```bash
npm run dev
```

1. Sign in with Google
2. Complete your profile
3. Create a team → Get 5-digit code
4. Open another browser (or incognito)
5. Sign in with different Google account
6. Join team using the code
7. Both accounts should see the same team!

## How It Works Now

### User Flow

```
1. Google Sign In
   ↓
2. Check if user exists in Supabase
   ↓
3. If new → Complete Profile → Save to Supabase
   If existing → Load profile from Supabase
   ↓
4. Teams Page
```

### Creating a Team

```
1. Click "Host a Team"
   ↓
2. Enter team name
   ↓
3. Generate 5-digit code
   ↓
4. Team saved to Supabase `teams` table
5. User's team_code updated in `users` table
   ↓
6. Share code with teammates
```

### Joining a Team

```
1. Click "Join a Team"
   ↓
2. Enter 5-digit code
   ↓
3. Supabase checks:
   - Does team exist?
   - Is team full? (max 3 members)
   ↓
4. If valid:
   - Add user to team
   - Increment member_count
   - Update user's team_code
   ↓
5. Show team details with all members
```

## Database Structure

### users table
- Stores all user profiles
- Links users to teams via `team_code`
- Tracks Google OAuth ID

### teams table
- Stores team information
- Unique 5-digit codes
- Tracks member count (max 3)

## Features

✅ **Real Team Sharing**: Teams work across different users/browsers
✅ **3-Member Limit**: Enforced at database level
✅ **Real-time Updates**: See team members instantly
✅ **Team Leader**: First member is automatically the leader
✅ **Leave Team**: Auto-deletes team if last member leaves
✅ **Member List**: View all team members with names and emails

## Testing Checklist

- [ ] Create Supabase project
- [ ] Run SQL schema
- [ ] Add credentials to .env
- [ ] Test: Create team on Account 1
- [ ] Test: Join team on Account 2 with code
- [ ] Test: Both accounts see same team
- [ ] Test: Try joining with 3rd account (should work)
- [ ] Test: Try joining with 4th account (should fail - team full)
- [ ] Test: Leave team
- [ ] Deploy to Vercel with Supabase credentials

## Deployment to Vercel

1. Add environment variables in Vercel:
   - `VITE_GOOGLE_CLIENT_ID`
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

2. Redeploy

3. Test with real users!

## Troubleshooting

**"Failed to fetch"**
- Check Supabase URL and key in .env
- Make sure Supabase project is active

**"Team not found"**
- Verify team code is correct
- Check if team exists in Supabase Table Editor

**"Team is full"**
- Team already has 3 members
- Someone needs to leave first

**Tables don't exist**
- Run the SQL schema in Supabase SQL Editor
- Check Table Editor to verify tables were created

## Support

Check these files for more details:
- `SUPABASE_SETUP.md` - Detailed Supabase setup
- `supabase-schema.sql` - Database schema
- `DASHBOARD_FEATURES.md` - All dashboard features

## What's Next?

Your hackathon platform now has:
- ✅ Google OAuth login
- ✅ User profiles
- ✅ Real team management (max 3 members)
- ✅ Announcements
- ✅ Project submission
- ✅ Contact form

Ready to launch! 🚀
