import { supabase } from '../lib/supabase';
import { Income } from '../types/financial';

export async function createIncome(income: Omit<Income, 'id'>, householdId: string) {
  const { data, error } = await supabase
    .from('income_sources')
    .insert([{ ...income, household_id: householdId }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getIncomes(householdId: string) {
  const { data, error } = await supabase
    .from('income_sources')
    .select('*')
    .eq('household_id', householdId);

  if (error) throw error;
  return data;
}