# cPanel Deployment Guide for Enthusia 5.0

## ⚠️ IMPORTANT: Tech Events Fixed for cPanel

The tech events now work properly for cPanel deployment. They no longer use localhost URLs.

## Quick Start

### Windows Users:
```cmd
build-all.bat
```

### Mac/Linux Users:
```bash
chmod +x build-all.sh
./build-all.sh
```

This will build all projects automatically.

## Project Structure on cPanel
```
Your cPanel public_html/
├── index.html (Main Enthusia site)
├── assets/
├── backimages/
├── .htaccess
├── sitnovate/ (SITNovate event)
│   ├── index.html
│   └── assets/
├── codesprint/ (CodeSprint event)
│   ├── index.html
│   └── assets/
├── sitank/ (SITank event)
│   ├── index.html
│   └── assets/
└── buildbrand/ (BuildBrand event)
    ├── index.html
    └── assets/
```

## What Was Fixed

1. ✅ Removed localhost URLs from AppRoutes.jsx
2. ✅ Updated tech event links to use subdirectories (`/sitnovate/`, `/codesprint/`, etc.)
3. ✅ Configured base paths in all vite configs
4. ✅ Changed events from internal routes to external links
5. ✅ Created automated build scripts

## Manual Build Steps (if needed)

### 1. Build Main Enthusia Site
```bash
npm install
npm run build
```
Output: `dist/` folder

### 2. Build Each Event

#### SITNovate
```bash
cd SITNovate-2.0-main
npm install
npm run build
```
Output: `SITNovate-2.0-main/dist/`

#### CodeSprint
```bash
cd CODE-SPRINT-2.0-main
npm install
npm run build
```
Output: `CODE-SPRINT-2.0-main/dist/`

#### SITank
```bash
cd SITank-2.0-main
npm install
npm run build
```
Output: `SITank-2.0-main/dist/`

#### BuildBrand (SvelteKit)
```bash
cd BuildBrand-main
npm install
npm run build
```
Output: `BuildBrand-main/build/` (Note: SvelteKit uses `build/` not `dist/`)

## Upload to cPanel

### Method 1: File Manager (Recommended for beginners)

1. Login to cPanel
2. Open **File Manager**
3. Navigate to `public_html/`
4. **Delete old files** (if updating)
5. Upload files:

   **Main Site:**
   - Upload ALL contents from `dist/` to `public_html/`
   - Make sure `.htaccess` is uploaded

   **SITNovate:**
   - Create folder: `public_html/sitnovate/`
   - Upload ALL contents from `SITNovate-2.0-main/dist/` to `public_html/sitnovate/`

   **CodeSprint:**
   - Create folder: `public_html/codesprint/`
   - Upload ALL contents from `CODE-SPRINT-2.0-main/dist/` to `public_html/codesprint/`

   **SITank:**
   - Create folder: `public_html/sitank/`
   - Upload ALL contents from `SITank-2.0-main/dist/` to `public_html/sitank/`

   **BuildBrand:**
   - Create folder: `public_html/buildbrand/`
   - Upload ALL contents from `BuildBrand-main/build/` to `public_html/buildbrand/`

### Method 2: FTP (Faster for large files)

Use FileZilla or any FTP client:
1. Connect using cPanel FTP credentials
2. Navigate to `public_html/`
3. Upload folders as described above

### Method 3: cPanel Terminal (Advanced)

If you have SSH access:
```bash
# Upload via SCP or rsync
scp -r dist/* username@yourserver.com:~/public_html/
scp -r SITNovate-2.0-main/dist/* username@yourserver.com:~/public_html/sitnovate/
# ... etc
```

## .htaccess Configuration

Each subdirectory needs its own `.htaccess` for React Router to work:

### Create `.htaccess` in each event folder:

**public_html/sitnovate/.htaccess:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /sitnovate/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /sitnovate/index.html [L]
</IfModule>
```

**public_html/codesprint/.htaccess:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /codesprint/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /codesprint/index.html [L]
</IfModule>
```

**public_html/sitank/.htaccess:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /sitank/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /sitank/index.html [L]
</IfModule>
```

**public_html/buildbrand/.htaccess:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /buildbrand/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /buildbrand/index.html [L]
</IfModule>
```

## Testing After Deployment

Visit these URLs (replace `yourdomain.com` with your actual domain):

- ✅ Main site: `https://yourdomain.com/`
- ✅ SITNovate: `https://yourdomain.com/sitnovate/`
- ✅ CodeSprint: `https://yourdomain.com/codesprint/`
- ✅ SITank: `https://yourdomain.com/sitank/`
- ✅ BuildBrand: `https://yourdomain.com/buildbrand/`

Click on each tech event card on the main site to verify navigation works.

## Troubleshooting

### Issue: Blank page on events
**Solution:**
- Check browser console (F12) for errors
- Verify base path in vite.config matches folder name
- Ensure `.htaccess` exists in each subdirectory
- Clear browser cache (Ctrl+Shift+R)

### Issue: Assets not loading (images, CSS, JS)
**Solution:**
- Verify base path configuration in vite configs
- Check file permissions: 644 for files, 755 for directories
- Ensure all files from `dist/` or `build/` were uploaded

### Issue: 404 error on page refresh
**Solution:**
- Ensure `.htaccess` is present in the subdirectory
- Check that mod_rewrite is enabled in cPanel
- Verify RewriteBase matches the folder path

### Issue: "Cannot GET /sitnovate" error
**Solution:**
- The `.htaccess` file is missing or incorrect
- Upload the correct `.htaccess` to that subdirectory

### Issue: Events still showing localhost URLs
**Solution:**
- You need to rebuild after the fixes
- Run `build-all.bat` or `build-all.sh` again
- Re-upload the built files

## File Permissions

Set correct permissions in cPanel File Manager:
- **Files:** 644 (rw-r--r--)
- **Directories:** 755 (rwxr-xr-x)
- **.htaccess:** 644

## Performance Optimization

The `.htaccess` already includes:
- ✅ GZIP compression
- ✅ Browser caching
- ✅ Security headers

Additional tips:
1. Optimize images before upload (use WebP format)
2. Enable CDN if available
3. Use cPanel's "Optimize Website" feature
4. Enable HTTP/2 in cPanel

## Common cPanel Settings

### Enable mod_rewrite
1. Go to cPanel → Software → Select PHP Version
2. Ensure Apache modules include `mod_rewrite`

### PHP Version
- Not required for this project (pure static HTML/JS)
- But if needed, use PHP 7.4 or higher

### SSL Certificate
1. Go to cPanel → Security → SSL/TLS
2. Install Let's Encrypt certificate (free)
3. Force HTTPS in `.htaccess`:
```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Support & Debugging

If issues persist:
1. Check cPanel **Error Logs** (Metrics → Errors)
2. Check browser console (F12 → Console tab)
3. Verify all files uploaded correctly
4. Test on different browsers
5. Clear browser cache and cookies

## Updating the Site

To update after changes:
1. Make your code changes
2. Run build script: `build-all.bat` or `build-all.sh`
3. Upload only changed files to cPanel
4. Clear browser cache to see changes

## Backup

Before updating:
1. Download current `public_html/` folder from cPanel
2. Or use cPanel's Backup feature
3. Keep local copies of all source code

---

**Need Help?** Check cPanel documentation or contact your hosting provider's support.
