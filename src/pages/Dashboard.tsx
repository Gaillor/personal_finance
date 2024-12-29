import React from 'react';
import { useFinancialData } from '../hooks/useFinancialData';
import { FinancialSummary } from '../components/dashboard/FinancialSummary';
import { ProjectionsChart } from '../components/dashboard/ProjectionsChart';

export const Dashboard: React.FC = () => {
  const { loading, error, calculations } = useFinancialData();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Chargement des données...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-md">
        <div className="text-red-700">
          Une erreur est survenue lors du chargement des données.
        </div>
      </div>
    );
  }

  const monthlyIncome = calculations.netSalaries.reduce(
    (sum, salary) => sum + salary.netMonthly,
    0
  );

  return (
    <div className="space-y-6">
      <FinancialSummary
        monthlyIncome={monthlyIncome}
        monthlyExpenses={calculations.expenses}
        savingsCapacity={calculations.savingsCapacity}
      />
      <ProjectionsChart data={calculations.projections} />
    </div>
  );
};