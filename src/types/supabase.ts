export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      households: {
        Row: {
          id: string
          user_id: string
          tax_parts: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          tax_parts?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          tax_parts?: number
          created_at?: string
          updated_at?: string
        }
      }
      income_sources: {
        Row: {
          id: string
          household_id: string
          source_type: string
          amount: number
          tax_rate: number
          withholding_rate: number
          year: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          household_id: string
          source_type: string
          amount: number
          tax_rate: number
          withholding_rate: number
          year: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          household_id?: string
          source_type?: string
          amount?: number
          tax_rate?: number
          withholding_rate?: number
          year?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}