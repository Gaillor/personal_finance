import { supabase } from '../lib/supabase';
import { MonthlyExpense } from '../types/financial';

export async function createExpense(expense: Omit<MonthlyExpense, 'id'>, householdId: string) {
  const { data, error } = await supabase
    .from('monthly_expenses')
    .insert([{ ...expense, household_id: householdId }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getExpenses(householdId: string) {
  const { data, error } = await supabase
    .from('monthly_expenses')
    .select('*')
    .eq('household_id', householdId);

  if (error) throw error;
  return data;
}