import { mockStorage } from '../../lib/mockStorage';
import { Investment } from '../../types/financial';

export async function createInvestment(investment: Omit<Investment, 'id'>) {
  return mockStorage.createInvestment(investment);
}

export async function getInvestments() {
  return mockStorage.getInvestments();
}