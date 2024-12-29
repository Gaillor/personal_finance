import { supabase } from '../lib/supabase';
import { Household } from '../types/financial';

export async function createHousehold(household: Omit<Household, 'id'>) {
  const { data, error } = await supabase
    .from('households')
    .insert([household])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getHousehold(userId: string) {
  const { data, error } = await supabase
    .from('households')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) throw error;
  return data;
}