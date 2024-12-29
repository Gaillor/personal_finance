import { supabase } from '../lib/supabase';
import { Investment } from '../types/financial';

export async function createInvestment(investment: Omit<Investment, 'id'>, householdId: string) {
  const { data, error } = await supabase
    .from('investments')
    .insert([{ ...investment, household_id: householdId }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getInvestments(householdId: string) {
  const { data, error } = await supabase
    .from('investments')
    .select('*')
    .eq('household_id', householdId);

  if (error) throw error;
  return data;
}