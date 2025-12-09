# Admin Dashboard Setup Guide

## Overview

A complete admin system has been implemented for managing the SITNovate hackathon. Admins get a separate dashboard with full control over teams, announcements, submissions, and messages.

## Setup Steps

### 1. Add Admin Google IDs

Edit the `admins.json` file in the root directory:

```json
{
  "admins": [
    "YOUR_GOOGLE_ID_HERE",
    "ANOTHER_ADMIN_GOOGLE_ID"
  ]
}
```

**How to get Google ID:**
1. Sign in to your app with Google
2. Open browser console
3. Type: `JSON.parse(localStorage.getItem('user')).sub`
4. Copy the ID and add it to `admins.json`

### 2. Update Supabase Schema

Run the updated SQL schema in Supabase SQL Editor (the `supabase-schema.sql` file now includes new tables):

- `submissions` - Project submissions
- `announcements` - Public and private announcements
- `contact_messages` - Contact form messages

### 3. Test Admin Access

1. Add your Google ID to `admins.json`
2. Sign in with Google
3. You'll be automatically redirected to `/admin/teams`

## Admin Features

### 1. Teams Management (`/admin/teams`)
- View all registered teams
- See team members and details
- Click on any team to view full details

### 2. Team Details (`/admin/teams/:teamCode`)
- View complete team information
- See all team members with their profiles
- **View team submissions** (PPT, PDF, project details)
- **Send private messages** to specific teams
  - Messages appear only for that team in their announcements
  - Choose message type (Info/Important/Deadline)

### 3. Announcements (`/admin/announcements`)
- Create public announcements visible to all participants
- Choose announcement type:
  - **Info** (Blue) - General information
  - **Important** (Red) - Critical updates
  - **Deadline** (Yellow) - Time-sensitive items
- Delete announcements
- View all past announcements

### 4. Submissions (`/admin/submissions`)
- View all project submissions from all teams
- See project titles, descriptions
- Check which files were uploaded (PPT/PDF)
- Click to view team details

### 5. Messages (`/admin/messages`)
- View all contact form submissions
- Filter by: All / Unread / Read
- Mark messages as read
- See user details (name, email, subject)
- View full message content

## User Flow

### For Regular Users:
```
Sign In → Complete Profile → Dashboard → Teams/Announcements/Submission/Contact
```

### For Admins:
```
Sign In → Admin Dashboard → Teams/Announcements/Submissions/Messages
```

## Database Schema

### New Tables:

**submissions**
- team_code (links to teams)
- project_title
- project_description
- ppt_url, pdf_url
- submitted_by
- timestamps

**announcements**
- title, content, type
- is_private (boolean)
- target_team_code (for private messages)
- created_by
- timestamps

**contact_messages**
- user_id, user_name, user_email
- subject, message
- status (unread/read/replied)
- admin_reply
- timestamps

## Features in Detail

### Private Team Messages

Admins can send private messages to specific teams:

1. Go to `/admin/teams`
2. Click "View Details" on any team
3. Scroll to "Send Private Message"
4. Choose type, enter title and message
5. Click "Send Message to Team"

The message will appear in that team's Announcements page with a "Private" badge.

### Contact Form Integration

When users submit the contact form:
1. Message is saved to `contact_messages` table
2. Appears in Admin Messages with "NEW" badge
3. Admin can mark as read
4. Admin can view full message details

### Submission Tracking

When teams submit projects:
1. Submission saved to `submissions` table
2. Visible in Admin Submissions page
3. Also visible in team detail page
4. Shows project title, description, and files

## Admin Dashboard UI

- **Red theme** to distinguish from user dashboard
- **Shield icon** in header
- Separate navigation: Teams / Announcements / Submissions / Messages
- Real-time data from Supabase
- Mobile responsive

## Security

- Admin status checked via `admins.json`
- Only users with Google IDs in the file can access admin routes
- Regular users cannot access `/admin/*` routes
- All data fetched from Supabase with proper RLS policies

## Testing Checklist

- [ ] Add your Google ID to `admins.json`
- [ ] Run updated SQL schema in Supabase
- [ ] Sign in as admin → Should redirect to `/admin/teams`
- [ ] View all teams and their members
- [ ] Click on a team → View submissions
- [ ] Send private message to a team
- [ ] Sign in as regular user → Check if private message appears
- [ ] Create public announcement as admin
- [ ] Check if announcement appears for all users
- [ ] Submit contact form as user
- [ ] Check if message appears in Admin Messages
- [ ] Mark message as read

## Deployment

1. Commit `admins.json` to your repository
2. Deploy to Vercel
3. Make sure Supabase credentials are in Vercel environment variables
4. Run the updated SQL schema in Supabase
5. Test admin access in production

## Important Notes

- **admins.json** is committed to the repository
- For production, consider moving admin IDs to environment variables
- Admin access is checked on sign-in
- No authentication middleware on routes (client-side only)
- For better security, implement server-side admin verification

## Future Enhancements

- Email notifications for new messages
- Admin reply functionality in contact messages
- Bulk announcement sending
- Export submissions as CSV
- Team performance analytics
- File download links for submissions
- Admin activity logs

## Support

If you need to add/remove admins:
1. Edit `admins.json`
2. Redeploy the application
3. New admins will have access on next sign-in

For issues:
- Check browser console for errors
- Verify Supabase connection
- Ensure SQL schema is up to date
- Check that Google ID is correct in `admins.json`
