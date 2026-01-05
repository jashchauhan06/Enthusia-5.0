-- Add new columns to submissions table for single file upload
ALTER TABLE submissions 
ADD COLUMN IF NOT EXISTS file_url TEXT,
ADD COLUMN IF NOT EXISTS file_name TEXT,
ADD COLUMN IF NOT EXISTS file_type TEXT;

-- Update existing submissions to use new columns (if any exist)
UPDATE submissions 
SET file_url = COALESCE(ppt_url, pdf_url),
    file_name = COALESCE(ppt_url, pdf_url),
    file_type = CASE 
      WHEN ppt_url IS NOT NULL THEN 'application/vnd.ms-powerpoint'
      WHEN pdf_url IS NOT NULL THEN 'application/pdf'
      ELSE NULL
    END
WHERE file_url IS NULL;
