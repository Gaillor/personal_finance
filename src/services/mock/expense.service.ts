import { mockStorage } from '../../lib/mockStorage';
import { MonthlyExpense } from '../../types/financial';

export async function createExpense(expense: Omit<MonthlyExpense, 'id'>) {
  return mockStorage.createExpense(expense);
}

export async function getExpenses() {
  return mockStorage.getExpenses();
}