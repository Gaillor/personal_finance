import React from 'react';
import { useForm } from './useForm';
import { useHousehold } from '../../hooks/useHousehold';
import { createInvestment } from '../../services/investment.service';
import { Investment } from '../../types/financial';

export const InvestmentForm: React.FC = () => {
  const { household } = useHousehold();
  const { values, handleChange, handleSubmit, setValues } = useForm<Investment>({
    initialValues: {
      investment_type: '',
      amount: 0,
      return_rate: 0,
      start_date: new Date().toISOString().split('T')[0],
    },
    onSubmit: async (data) => {
      if (!household?.id) {
        throw new Error('No household found');
      }
      await createInvestment(data, household.id);
      // Reset form
      setValues({
        investment_type: '',
        amount: 0,
        return_rate: 0,
        start_date: new Date().toISOString().split('T')[0],
      });
    },
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Form fields remain the same */}
    </form>
  );
};