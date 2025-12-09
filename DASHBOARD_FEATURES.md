# Dashboard Features Documentation

## Overview
Complete dashboard system for SITNovate hackathon with team management, announcements, submissions, and contact features.

## Features Implemented

### 1. Dashboard Layout
- **Navigation Bar**: Sticky top navigation with all dashboard sections
- **Mobile Responsive**: Hamburger menu for mobile devices
- **Sign Out**: Logout functionality that clears user data

### 2. Profile Page (`/dashboard`)
- User profile form with:
  - Full Name
  - Email Address
  - Phone Number
  - College/Institution
  - Year of Study
  - Branch/Department
- Data saved to localStorage
- Redirects to Teams page after completion

### 3. Teams Page (`/dashboard/teams`)

#### Host a Team
1. Enter team name
2. Click "Generate Team Code"
3. Receive unique 5-digit code
4. Share code with team members
5. Copy code to clipboard functionality

#### Join a Team
1. Enter 5-digit team code
2. Click "Join Team"
3. Become part of existing team

#### Team Management
- View current team details
- See team code (for hosts)
- Leave team option
- Role display (Host/Member)

### 4. Announcements Page (`/dashboard/announcements`)
- Latest hackathon updates
- Color-coded announcement types:
  - **Important** (Red): Critical information
  - **Deadline** (Yellow): Time-sensitive items
  - **Info** (Blue): General updates
- Date and content for each announcement

### 5. Submission Page (`/dashboard/submission`)
- Project submission form with:
  - Project Title
  - Project Description
  - Presentation Upload (PPT/PPTX)
  - Report Upload (PDF)
- Deadline warning banner
- Success confirmation after submission
- Update submission option

### 6. Contact Page (`/dashboard/contact`)
- Contact information cards:
  - Email
  - Phone
  - Location
- Contact form with:
  - Subject dropdown
  - Message textarea
- Success confirmation after sending

## User Flow

```
1. Sign In with Google
   ↓
2. Complete Profile (/dashboard)
   ↓
3. Redirected to Teams (/dashboard/teams)
   ↓
4. Choose: Host Team OR Join Team
   ↓
5. Access other features:
   - View Announcements
   - Submit Project
   - Contact Support
```

## Data Storage

All data is currently stored in localStorage:
- `user`: Google OAuth user info
- `userProfile`: User profile details
- `team`: Team information (code, role, members)
- `submission`: Project submission details

## Navigation Structure

```
Dashboard Layout
├── Profile (/)
├── Teams (/teams)
├── Announcements (/announcements)
├── Submission (/submission)
└── Contact Us (/contact)
```

## Team Code System

- **Format**: 5-digit numeric code (e.g., 12345)
- **Generation**: Random number between 10000-99999
- **Usage**: 
  - Host creates team → gets code
  - Members use code to join
- **Storage**: Saved in localStorage with team data

## Mobile Responsive
- All pages fully responsive
- Mobile navigation menu
- Touch-friendly buttons
- Optimized layouts for small screens

## Future Enhancements (Backend Integration)

When connecting to a backend:
1. Replace localStorage with API calls
2. Implement real-time team member updates
3. Add team code validation
4. Store files on server/cloud storage
5. Add email notifications
6. Implement real announcement system
7. Add admin panel for organizers

## File Structure

```
src/
├── components/
│   └── dashboard/
│       └── DashboardLayout.tsx
├── pages/
│   ├── DashboardPage.tsx (Profile)
│   └── dashboard/
│       ├── TeamsPage.tsx
│       ├── AnnouncementsPage.tsx
│       ├── SubmissionPage.tsx
│       └── ContactPage.tsx
└── App.tsx (Routes)
```

## Testing Checklist

- [ ] Sign in with Google
- [ ] Complete profile form
- [ ] Host a team and get code
- [ ] Join a team with code
- [ ] View announcements
- [ ] Submit project files
- [ ] Send contact message
- [ ] Sign out
- [ ] Test on mobile device
- [ ] Test navigation between pages
