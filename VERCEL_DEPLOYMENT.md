# Vercel Deployment Guide

This project is configured for deployment on Vercel.

## Quick Deploy

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will automatically detect the Vite configuration
6. Click "Deploy"

## Configuration

The project is already configured with:
- `vercel.json` - Vercel configuration file with SPA routing
- `fix-permissions.js` - Cross-platform script to fix Vite binary permissions
- Build command: `npm run build` (includes prebuild step)
- Output directory: `dist`
- Framework: Vite (auto-detected)
- Node version: 20.x (automatically detected)

## Permission Fix

The project includes a `prebuild` script that automatically fixes permission issues with the Vite binary on Linux/Unix systems (like Vercel's build environment). This script:
- Runs automatically before each build
- Works cross-platform (Windows, Linux, macOS)
- Fixes the "Permission denied" error (exit code 126)

## Environment Variables

If you need to add environment variables:
1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add your variables

## Custom Domain

To add a custom domain:
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your domain and follow the DNS configuration instructions

## Build Logs

If deployment fails, check the build logs in the Vercel dashboard for detailed error messages.

## Troubleshooting

If you encounter build errors:
1. Check that all dependencies are in `package.json`
2. Verify the build works locally with `npm run build`
3. Check Vercel build logs for specific error messages
4. Ensure Node version compatibility (20.x recommended)

