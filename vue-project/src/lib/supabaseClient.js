import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://krbtbymtmoidqumydcye.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyYnRieW10bW9pZHF1bXlkY3llIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNTU3NjAsImV4cCI6MjA1MzgzMTc2MH0.Aojk6RPyGrOaSh9erPUImNVNGVTTyjX9DgjhJaasuXs')