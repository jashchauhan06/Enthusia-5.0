-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  google_id TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  college TEXT,
  year TEXT,
  branch TEXT,
  team_code TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create teams table
CREATE TABLE IF NOT EXISTS teams (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  member_count INTEGER DEFAULT 1 CHECK (member_count <= 3),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on team_code for faster lookups
CREATE INDEX IF NOT EXISTS idx_users_team_code ON users(team_code);
CREATE INDEX IF NOT EXISTS idx_teams_code ON teams(code);
CREATE INDEX IF NOT EXISTS idx_users_google_id ON users(google_id);

-- Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE teams ENABLE ROW LEVEL SECURITY;

-- Create policies for users table
-- Allow users to read all users (for team member display)
CREATE POLICY "Users can view all users" ON users
  FOR SELECT USING (true);

-- Allow users to insert their own profile
CREATE POLICY "Users can insert their own profile" ON users
  FOR INSERT WITH CHECK (true);

-- Allow users to update their own profile
CREATE POLICY "Users can update their own profile" ON users
  FOR UPDATE USING (true);

-- Create policies for teams table
-- Allow anyone to read teams (to verify team codes)
CREATE POLICY "Anyone can view teams" ON teams
  FOR SELECT USING (true);

-- Allow anyone to create teams
CREATE POLICY "Anyone can create teams" ON teams
  FOR INSERT WITH CHECK (true);

-- Allow anyone to update teams (for member count)
CREATE POLICY "Anyone can update teams" ON teams
  FOR UPDATE USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_teams_updated_at
  BEFORE UPDATE ON teams
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create submissions table
CREATE TABLE IF NOT EXISTS submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  team_code TEXT NOT NULL REFERENCES teams(code) ON DELETE CASCADE,
  project_title TEXT NOT NULL,
  project_description TEXT,
  file_url TEXT,
  file_name TEXT,
  file_type TEXT,
  ppt_url TEXT,
  pdf_url TEXT,
  submitted_by TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create announcements table
CREATE TABLE IF NOT EXISTS announcements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  type TEXT DEFAULT 'info' CHECK (type IN ('important', 'deadline', 'info')),
  target_team_code TEXT,
  is_private BOOLEAN DEFAULT false,
  created_by TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,
  user_name TEXT NOT NULL,
  user_email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'replied')),
  admin_reply TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_submissions_team_code ON submissions(team_code);
CREATE INDEX IF NOT EXISTS idx_announcements_target_team ON announcements(target_team_code);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_user_id ON contact_messages(user_id);

-- Enable RLS
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Policies for submissions
CREATE POLICY "Users can view their team submissions" ON submissions
  FOR SELECT USING (true);

CREATE POLICY "Users can insert submissions" ON submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can update their team submissions" ON submissions
  FOR UPDATE USING (true);

-- Policies for announcements
CREATE POLICY "Users can view public announcements" ON announcements
  FOR SELECT USING (is_private = false OR target_team_code IS NULL);

CREATE POLICY "Users can view team-specific announcements" ON announcements
  FOR SELECT USING (true);

CREATE POLICY "Anyone can create announcements" ON announcements
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can update announcements" ON announcements
  FOR UPDATE USING (true);

-- Policies for contact_messages
CREATE POLICY "Users can view their own messages" ON contact_messages
  FOR SELECT USING (true);

CREATE POLICY "Users can insert messages" ON contact_messages
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can update messages" ON contact_messages
  FOR UPDATE USING (true);

-- Create triggers for new tables
CREATE TRIGGER update_submissions_updated_at
  BEFORE UPDATE ON submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_announcements_updated_at
  BEFORE UPDATE ON announcements
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contact_messages_updated_at
  BEFORE UPDATE ON contact_messages
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
