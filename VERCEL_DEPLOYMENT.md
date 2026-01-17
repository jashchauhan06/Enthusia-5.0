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
- `vercel.json` - Vercel configuration file
- Build command: `npm run build`
- Output directory: `dist`
- Framework: Vite
- Node version: 20.x (automatically detected)

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
