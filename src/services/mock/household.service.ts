import { mockStorage } from '../../lib/mockStorage';
import { Household } from '../../types/financial';

export async function createHousehold(household: Omit<Household, 'id'>) {
  return mockStorage.createHousehold(household);
}

export async function getHousehold() {
  return mockStorage.getHousehold();
}