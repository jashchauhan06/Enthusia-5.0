# Google OAuth Setup Guide

## Steps to Complete Integration

### 1. Get Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** > **Credentials**
4. Click **Create Credentials** > **OAuth client ID**
5. Configure the OAuth consent screen if prompted
6. Select **Web application** as the application type
7. Add authorized JavaScript origins:
   - Development: `http://localhost:5173`
   - Production: `https://sitnovate.vercel.app`
8. Add authorized redirect URIs:
   - Development: `http://localhost:5173`
   - Production: `https://sitnovate.vercel.app`
9. Copy the **Client ID**

### 2. Configure Environment Variables

1. Open the `.env` file in the root directory
2. Replace `your_google_client_id_here` with your actual Google Client ID:
   ```
   VITE_GOOGLE_CLIENT_ID=123456789-abcdefghijklmnop.apps.googleusercontent.com
   ```

### 3. Test the Integration

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Navigate to `/signin`
3. Click "Continue with Google"
4. Sign in with your Google account
5. You should be redirected to the dashboard

## What Was Implemented

- ✅ Installed `@react-oauth/google` package
- ✅ Wrapped app with `GoogleOAuthProvider` in `main.tsx`
- ✅ Implemented `useGoogleLogin` hook in `SignInPage.tsx`
- ✅ Added user info fetching from Google API
- ✅ Stored user data in localStorage
- ✅ Added redirect to dashboard after successful login

## User Data Structure

After successful login, user info is stored in localStorage with this structure:
```json
{
  "sub": "google_user_id",
  "name": "User Name",
  "email": "user@example.com",
  "picture": "https://...",
  "email_verified": true
}
```

## Next Steps (Optional)

- Set up a backend to handle authentication tokens securely
- Implement JWT token management
- Add user session management with Zustand
- Create protected routes
- Add logout functionality
