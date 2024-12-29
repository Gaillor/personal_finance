import { Investment } from '../../types/financial';

// Calcule la liquidité disponible
export function calculateLiquidity(
  savingsCapacity: number,
  investments: Investment[]
): number {
  const totalInvestments = investments.reduce(
    (sum, investment) => sum + investment.amount,
    0
  );

  return savingsCapacity - totalInvestments;
}