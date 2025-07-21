
-- Create the user_flashcards table
CREATE TABLE user_flashcards (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  topic TEXT NOT NULL DEFAULT 'General',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE user_flashcards ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations for now (you can restrict this later based on user authentication)
CREATE POLICY "Allow all operations on user_flashcards" ON user_flashcards
FOR ALL USING (true) WITH CHECK (true);

-- Create index for better performance
CREATE INDEX idx_user_flashcards_created_at ON user_flashcards(created_at DESC);
CREATE INDEX idx_user_flashcards_topic ON user_flashcards(topic);
