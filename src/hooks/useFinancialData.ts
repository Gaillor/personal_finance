import { useState, useEffect } from 'react';
import { Income, MonthlyExpense, Investment } from '../types/financial';
import { services } from '../services';
import { useHousehold } from './useHousehold';
import { useFinancialCalculations } from './useFinancialCalculations';

export function useFinancialData() {
  const { household } = useHousehold();
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [expenses, setExpenses] = useState<MonthlyExpense[]>([]);
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const calculations = useFinancialCalculations({
    incomes,
    expenses,
    investments,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const [incomesData, expensesData, investmentsData] = await Promise.all([
          services.income.getIncomes(),
          services.expense.getExpenses(),
          services.investment.getInvestments(),
        ]);

        setIncomes(incomesData);
        setExpenses(expensesData);
        setInvestments(investmentsData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch financial data'));
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [household?.id]);

  return {
    incomes,
    expenses,
    investments,
    loading,
    error,
    calculations,
  };
}