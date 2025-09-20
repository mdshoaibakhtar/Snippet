import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://tlwzxlhlbzcdtuvbmgul.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsd3p4bGhsYnpjZHR1dmJtZ3VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzNzA1NzYsImV4cCI6MjA3Mzk0NjU3Nn0.s1BzRyGKrcoqYzOcjKyivSaoPyO8kS4C_uxMiaakVSw"

if (!supabaseUrl || !supabaseAnonKey){
    throw new Error("Missing Supabase environment variables")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)