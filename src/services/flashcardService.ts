
import { supabase } from '@/integrations/supabase/client'

export interface UserFlashcard {
  id: number
  question: string
  answer: string
  topic: string
  created_at: string
  session_id: string | null
}

export const flashcardService = {
  async addFlashcard(question: string, answer: string, topic: string, sessionId: string) {
    const { data, error } = await supabase
      .from('user_flashcards')
      .insert([
        {
          question,
          answer,
          topic,
          session_id: sessionId,
          created_at: new Date().toISOString()
        }
      ])
      .select()
    
    if (error) throw error
    return data
  },

  async getUserFlashcards(sessionId?: string) {
    let query = supabase
      .from('user_flashcards')
      .select('*')
      .order('created_at', { ascending: false })
    
    // Filter by session_id if provided
    if (sessionId) {
      query = query.eq('session_id', sessionId)
    }
    
    const { data, error } = await query
    
    if (error) throw error
    return data || []
  },

  async deleteFlashcard(id: number) {
    const { error } = await supabase
      .from('user_flashcards')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}
