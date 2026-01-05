-- Drop existing policies
DROP POLICY IF EXISTS "Allow authenticated uploads pndbr_0" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated updates pndbr_1" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to upload pndbr_0" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated updates pndbr_0" ON storage.objects;
DROP POLICY IF EXISTS "Allow public downloads pndbr_0" ON storage.objects;

-- Create new policies that work without Supabase authentication
-- Allow anyone to upload to submissions bucket
CREATE POLICY "Allow uploads to submissions"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'submissions');

-- Allow anyone to read from submissions bucket
CREATE POLICY "Allow downloads from submissions"
ON storage.objects FOR SELECT
USING (bucket_id = 'submissions');

-- Allow anyone to update files in submissions bucket
CREATE POLICY "Allow updates to submissions"
ON storage.objects FOR UPDATE
USING (bucket_id = 'submissions');

-- Allow anyone to delete files in submissions bucket (optional)
CREATE POLICY "Allow deletes from submissions"
ON storage.objects FOR DELETE
USING (bucket_id = 'submissions');
