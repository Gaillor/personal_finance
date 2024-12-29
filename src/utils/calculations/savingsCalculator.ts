import { MonthlyExpense, Income } from '../../types/financial';

// Calcule la capacité d'épargne mensuelle
export function calculateSavingsCapacity(
  incomes: Income[],
  expenses: MonthlyExpense[]
): number {
  const totalMonthlyIncome = incomes.reduce((sum, income) => {
    const { netMonthly } = calculateNetSalary(
      income.amount,
      income.tax_rate,
      income.withholding_rate
    );
    return sum + netMonthly;
  }, 0);

  const totalMonthlyExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return totalMonthlyIncome - totalMonthlyExpenses;
}