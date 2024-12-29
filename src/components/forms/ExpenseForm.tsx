import React from 'react';
import { useForm } from './useForm';
import { useHousehold } from '../../hooks/useHousehold';
import { createExpense } from '../../services/expense.service';
import { MonthlyExpense } from '../../types/financial';

export const ExpenseForm: React.FC = () => {
  const { household } = useHousehold();
  const { values, handleChange, handleSubmit, setValues } = useForm<MonthlyExpense>({
    initialValues: {
      category: 'CURRENT',
      description: '',
      amount: 0,
      date: new Date().toISOString().split('T')[0],
    },
    onSubmit: async (data) => {
      if (!household?.id) {
        throw new Error('No household found');
      }
      await createExpense(data, household.id);
      // Reset form
      setValues({
        category: 'CURRENT',
        description: '',
        amount: 0,
        date: new Date().toISOString().split('T')[0],
      });
    },
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Form fields remain the same */}
    </form>
  );
};