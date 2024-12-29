import React from 'react';
import { HouseholdForm } from '../components/forms/HouseholdForm';
import { IncomeForm } from '../components/forms/IncomeForm';
import { ExpenseForm } from '../components/forms/ExpenseForm';
import { InvestmentForm } from '../components/forms/InvestmentForm';

export const FinancialSetup: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Information du foyer fiscal
            </h3>
            <div className="mt-5">
              <HouseholdForm />
            </div>
          </div>
        </div>

        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Revenus
            </h3>
            <div className="mt-5">
              <IncomeForm />
            </div>
          </div>
        </div>

        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Dépenses mensuelles
            </h3>
            <div className="mt-5">
              <ExpenseForm />
            </div>
          </div>
        </div>

        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Investissements
            </h3>
            <div className="mt-5">
              <InvestmentForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};