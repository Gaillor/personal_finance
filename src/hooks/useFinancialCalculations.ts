import { useMemo } from 'react';
import { Income, MonthlyExpense, Investment } from '../types/financial';
import { calculateNetSalary } from '../utils/calculations/taxCalculator';
import { calculateSavingsCapacity } from '../utils/calculations/savingsCalculator';
import { calculateLiquidity } from '../utils/calculations/liquidityCalculator';
import { calculateProjections } from '../utils/calculations/projectionCalculator';

interface UseFinancialCalculationsProps {
  incomes: Income[];
  expenses: MonthlyExpense[];
  investments: Investment[];
}

export function useFinancialCalculations({
  incomes,
  expenses,
  investments,
}: UseFinancialCalculationsProps) {
  const calculations = useMemo(() => {
    const savingsCapacity = calculateSavingsCapacity(incomes, expenses);
    const liquidity = calculateLiquidity(savingsCapacity, investments);
    const projections = calculateProjections(savingsCapacity, liquidity, investments);

    return {
      savingsCapacity,
      liquidity,
      projections,
      netSalaries: incomes.map(income => ({
        ...income,
        ...calculateNetSalary(income.amount, income.tax_rate, income.withholding_rate),
      })),
    };
  }, [incomes, expenses, investments]);

  return calculations;
}