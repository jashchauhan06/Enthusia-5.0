# Deployment Guide for Vercel

## Environment Variables Setup

### 1. Add Environment Variable to Vercel

1. Go to your Vercel project dashboard: https://vercel.com/dashboard
2. Select your project (sitnovate)
3. Go to **Settings** > **Environment Variables**
4. Add the following variable:
   - **Name**: `VITE_GOOGLE_CLIENT_ID`
   - **Value**: Your Google OAuth Client ID (from Google Cloud Console)
   - **Environment**: Select all (Production, Preview, Development)
5. Click **Save**

### 2. Google Cloud Console Configuration

Make sure your Google OAuth Client has these authorized origins and redirect URIs:

**Authorized JavaScript origins:**
- `https://sitnovate.vercel.app`
- `http://localhost:5173` (for local development)

**Authorized redirect URIs:**
- `https://sitnovate.vercel.app`
- `http://localhost:5173` (for local development)

### 3. Redeploy

After adding the environment variable:
1. Go to **Deployments** tab in Vercel
2. Click the three dots on the latest deployment
3. Select **Redeploy**
4. Or simply push a new commit to trigger automatic deployment

## Testing the Deployment

1. Visit: https://sitnovate.vercel.app/signin
2. Click "Continue with Google"
3. Sign in with your Google account
4. You should be redirected to the dashboard

## Local Development

For local development, make sure your `.env` file has:
```
VITE_GOOGLE_CLIENT_ID=your_google_client_id_here
```

Then run:
```bash
npm run dev
```

## Troubleshooting

### "redirect_uri_mismatch" Error
- Make sure `https://sitnovate.vercel.app` is added to authorized redirect URIs in Google Cloud Console
- Wait a few minutes after adding URIs for changes to propagate

### Environment Variable Not Working
- Ensure the variable name is exactly `VITE_GOOGLE_CLIENT_ID` (case-sensitive)
- Redeploy after adding environment variables
- Check that the variable is set for the correct environment (Production/Preview)

### Google Sign-In Button Not Working
- Check browser console for errors
- Verify the Client ID is correct
- Ensure the domain is authorized in Google Cloud Console

## Production Checklist

- ✅ Google OAuth Client ID configured
- ✅ Environment variable added to Vercel
- ✅ Authorized origins and redirect URIs set in Google Cloud Console
- ✅ All URLs updated to `sitnovate.vercel.app`
- ✅ SEO metadata updated with correct domain
- ✅ Structured data updated with correct URLs
