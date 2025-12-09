# Supabase Setup Guide

## Step 1: Create Supabase Project

1. Go to [Supabase](https://supabase.com/)
2. Sign in or create an account
3. Click "New Project"
4. Fill in:
   - Project name: `sitnovate-hackathon`
   - Database password: (create a strong password)
   - Region: Choose closest to your users
5. Click "Create new project"

## Step 2: Get API Credentials

1. In your Supabase project dashboard, go to **Settings** > **API**
2. Copy these values:
   - **Project URL** → This is your `VITE_SUPABASE_URL`
   - **anon public** key → This is your `VITE_SUPABASE_ANON_KEY`

## Step 3: Add to Environment Variables

Add to your `.env` file:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

Also add to Vercel environment variables (for production).

## Step 4: Create Database Tables

1. In Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy and paste the entire content from `supabase-schema.sql`
4. Click "Run" or press Ctrl+Enter

This will create:
- `users` table
- `teams` table
- Indexes for performance
- Row Level Security policies
- Triggers for auto-updating timestamps

## Step 5: Verify Tables

1. Go to **Table Editor** in Supabase dashboard
2. You should see two tables:
   - `users`
   - `teams`

## Database Schema

### Users Table
| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key (auto-generated) |
| google_id | TEXT | Google OAuth ID (unique) |
| full_name | TEXT | User's full name |
| email | TEXT | User's email (unique) |
| phone | TEXT | Phone number (optional) |
| college | TEXT | College/Institution (optional) |
| year | TEXT | Year of study (optional) |
| branch | TEXT | Branch/Department (optional) |
| team_code | TEXT | Team code if user is in a team |
| created_at | TIMESTAMP | Auto-generated |
| updated_at | TIMESTAMP | Auto-updated |

### Teams Table
| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key (auto-generated) |
| code | TEXT | 5-digit team code (unique) |
| name | TEXT | Team name |
| member_count | INTEGER | Number of members (max 3) |
| created_at | TIMESTAMP | Auto-generated |
| updated_at | TIMESTAMP | Auto-updated |

## Features Implemented

### Team Management
- ✅ Create team with unique 5-digit code
- ✅ Join team using code
- ✅ Maximum 3 members per team (enforced)
- ✅ View team members in real-time
- ✅ Leave team (auto-deletes if last member)
- ✅ Team leader identification

### User Management
- ✅ Store Google OAuth user data
- ✅ Complete user profile
- ✅ Link users to teams
- ✅ Track team membership

## Security

Row Level Security (RLS) is enabled with policies that:
- Allow users to view all users (for team member display)
- Allow users to insert/update their own profile
- Allow anyone to view teams (for code verification)
- Allow anyone to create/update teams

## Testing

1. Sign in with Google on two different browsers/accounts
2. Create a team on Account 1
3. Copy the 5-digit code
4. Join the team on Account 2 using the code
5. Both accounts should see the same team with both members listed

## Troubleshooting

### "relation does not exist" error
- Make sure you ran the SQL schema in Supabase SQL Editor
- Check that tables were created in Table Editor

### "row-level security policy" error
- RLS policies are included in the schema
- If issues persist, temporarily disable RLS for testing

### Team not showing up
- Check browser console for errors
- Verify Supabase credentials in .env
- Check Supabase logs in dashboard

### Member count not updating
- The trigger should auto-update
- Check if the team exists in the teams table
- Verify the member_count column

## Production Deployment

1. Add Supabase credentials to Vercel environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
2. Redeploy your application
3. Test with multiple accounts

## Future Enhancements

- Add team chat functionality
- Add file uploads for team submissions
- Add admin dashboard for organizers
- Add email notifications for team invites
- Add team activity logs
