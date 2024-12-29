import { mockStorage } from '../../lib/mockStorage';
import { Income } from '../../types/financial';

export async function createIncome(income: Omit<Income, 'id'>) {
  return mockStorage.createIncome(income);
}

export async function getIncomes() {
  return mockStorage.getIncomes();
}