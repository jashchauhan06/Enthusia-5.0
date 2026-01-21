# BuildBrand TypeScript Error Fix

## Problem
```
Cannot write file 'BuildBrand-main/static/sw.js' because it would overwrite input file.
```

## Root Cause
BuildBrand was configured for Vercel deployment using `@sveltejs/adapter-vercel`, which doesn't work for cPanel static hosting.

## Solution Applied

### 1. Changed Adapter (svelte.config.js)
```javascript
// Before:
import adapter from '@sveltejs/adapter-vercel';

// After:
import adapter from '@sveltejs/adapter-static';
```

### 2. Updated Adapter Config
```javascript
adapter: adapter({
    pages: 'build',
    assets: 'build',
    fallback: 'index.html',
    precompress: false,
    strict: true
})
```

### 3. Fixed TypeScript Config (tsconfig.json)
Added exclude to prevent compiling static files:
```json
"exclude": ["node_modules", "build", ".svelte-kit", "static"]
```

### 4. Updated Build Scripts
The build scripts now automatically install `@sveltejs/adapter-static` before building BuildBrand.

## How to Build Now

### Option 1: Use Build Script (Recommended)
```bash
# Windows
build-all.bat

# Mac/Linux
./build-all.sh
```

### Option 2: Manual Build
```bash
cd BuildBrand-main
npm install -D @sveltejs/adapter-static
npm run build
```

## What Changed

| File | Change |
|------|--------|
| `svelte.config.js` | Changed from `adapter-vercel` to `adapter-static` |
| `tsconfig.json` | Added `exclude` array to prevent static file compilation |
| `build-all.bat` | Auto-installs adapter-static |
| `build-all.sh` | Auto-installs adapter-static |

## Output Location
BuildBrand outputs to `build/` folder (not `dist/` like the React apps).

Upload `BuildBrand-main/build/*` to `public_html/buildbrand/` on cPanel.

## Why This Happened
- Vercel adapter is for serverless deployment
- cPanel needs static HTML/JS/CSS files
- Static adapter generates proper static files for cPanel

## Verification
After building, you should see:
```
BuildBrand-main/
└── build/
    ├── index.html
    ├── _app/
    └── ... (other assets)
```

No more TypeScript errors! ✅
