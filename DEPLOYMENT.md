# cPanel Deployment Guide

## Steps to Deploy Your Website on cPanel

### 1. Build Your Project
Run the following command in your project directory:
```bash
npm run build
```
This will create a `dist` folder with all your production files.

### 2. Prepare Files for Upload
After building, you'll have a `dist` folder containing:
- index.html
- assets/ (CSS, JS, images)
- All your public files

### 3. Upload to cPanel

#### Option A: File Manager (Recommended for beginners)
1. Log in to your cPanel account
2. Open "File Manager"
3. Navigate to `public_html` (or your domain's root directory)
4. Delete any existing files (if this is a fresh install)
5. Upload ALL contents from the `dist` folder (not the folder itself)
6. Upload the `.htaccess` file from your project root

#### Option B: FTP Client (FileZilla, etc.)
1. Connect to your server via FTP
2. Navigate to `public_html`
3. Upload all files from the `dist` folder
4. Upload the `.htaccess` file

### 4. Verify .htaccess
Make sure the `.htaccess` file is in the root directory (public_html) and is visible.
If you can't see it, enable "Show Hidden Files" in File Manager settings.

### 5. Set Correct Permissions
- Folders: 755
- Files: 644
- .htaccess: 644

### 6. Test Your Website
Visit your domain and test:
- Homepage loads correctly
- All routes work (React Router)
- Images and assets load
- Navigation works properly

## Important Notes

✅ **What's Configured:**
- Relative paths for assets (base: './')
- React Router support via .htaccess
- GZIP compression for faster loading
- Browser caching for better performance
- Security headers

⚠️ **Common Issues:**

1. **Blank page after deployment**
   - Check browser console for errors
   - Verify all files uploaded correctly
   - Check .htaccess is present

2. **404 errors on refresh**
   - Ensure .htaccess is uploaded
   - Verify mod_rewrite is enabled on server

3. **Assets not loading**
   - Check file paths are correct
   - Verify permissions are set correctly

4. **Subdirectory deployment**
   If deploying to a subdirectory (e.g., yourdomain.com/myapp):
   - Change `base: './'` to `base: '/myapp/'` in vite.config.js
   - Update RewriteBase in .htaccess to `/myapp/`
   - Rebuild the project

## Quick Checklist
- [ ] Run `npm run build`
- [ ] Upload all files from `dist` folder to `public_html`
- [ ] Upload `.htaccess` file
- [ ] Set correct permissions
- [ ] Test all routes
- [ ] Check browser console for errors

## Need Help?
Contact your hosting provider if:
- mod_rewrite is not enabled
- You need help with file permissions
- Server configuration issues arise
