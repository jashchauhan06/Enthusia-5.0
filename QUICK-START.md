# ⚡ Quick Start - Deploy to cPanel

## 1️⃣ Build (Choose your OS)

### Windows:
```cmd
build-all.bat
```

### Mac/Linux:
```bash
chmod +x build-all.sh
./build-all.sh
```

## 2️⃣ Upload to cPanel

Login to cPanel → File Manager → public_html/

| Upload This | To Here |
|------------|---------|
| `dist/*` | `public_html/` |
| `SITNovate-2.0-main/dist/*` | `public_html/sitnovate/` |
| `CODE-SPRINT-2.0-main/dist/*` | `public_html/codesprint/` |
| `SITank-2.0-main/dist/*` | `public_html/sitank/` |
| `BuildBrand-main/build/*` | `public_html/buildbrand/` |

## 3️⃣ Create .htaccess Files

In cPanel File Manager, create `.htaccess` in each event folder:

### public_html/sitnovate/.htaccess
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /sitnovate/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /sitnovate/index.html [L]
</IfModule>
```

### public_html/codesprint/.htaccess
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /codesprint/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /codesprint/index.html [L]
</IfModule>
```

### public_html/sitank/.htaccess
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /sitank/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /sitank/index.html [L]
</IfModule>
```

### public_html/buildbrand/.htaccess
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /buildbrand/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /buildbrand/index.html [L]
</IfModule>
```

## 4️⃣ Test

Visit:
- ✅ `https://yourdomain.com/`
- ✅ `https://yourdomain.com/sitnovate/`
- ✅ `https://yourdomain.com/codesprint/`
- ✅ `https://yourdomain.com/sitank/`
- ✅ `https://yourdomain.com/buildbrand/`

## ✅ Done!

Click tech event cards on main site to verify navigation works.

---

**Need help?** See `CPANEL-DEPLOYMENT.md` for detailed instructions.
