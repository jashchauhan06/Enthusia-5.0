# Supabase Storage Setup for File Uploads

## Step 1: Create Storage Bucket in Supabase

1. Go to your Supabase Dashboard
2. Click on **Storage** in the left sidebar
3. Click **"New bucket"**
4. Enter bucket name: `submissions`
5. Set as **Public** (so admins can download files)
6. Click **"Create bucket"**

## Step 2: Set Storage Policies

In Supabase Dashboard, go to Storage > submissions bucket > Policies

Add these policies:

### Policy 1: Allow authenticated users to upload
```sql
CREATE POLICY "Allow authenticated uploads"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'submissions');
```

### Policy 2: Allow public downloads
```sql
CREATE POLICY "Allow public downloads"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'submissions');
```

### Policy 3: Allow users to update their files
```sql
CREATE POLICY "Allow authenticated updates"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'submissions');
```

## Step 3: Get Storage URL

Your storage URL will be:
```
https://[YOUR_PROJECT_ID].supabase.co/storage/v1/object/public/submissions/
```

Replace `[YOUR_PROJECT_ID]` with your actual Supabase project ID.

## That's it!

The code has been updated to:
1. Upload files to Supabase Storage when submitting
2. Store the file URL in the database
3. Show download buttons for admins
4. Allow admins to open/download files

Files will be stored as:
`submissions/[team_code]/[timestamp]_[filename]`
