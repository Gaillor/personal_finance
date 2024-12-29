import React from 'react';
import { useForm } from './useForm';

interface IncomeFormData {
  source_type: 'SALARY_1' | 'SALARY_2' | 'OTHER';
  amount: number;
  tax_rate: number;
  withholding_rate: number;
  year: number;
}

export const IncomeForm: React.FC = () => {
  const { values, handleChange, handleSubmit } = useForm<IncomeFormData>({
    initialValues: {
      source_type: 'SALARY_1',
      amount: 0,
      tax_rate: 0,
      withholding_rate: 0,
      year: new Date().getFullYear(),
    },
    onSubmit: async (data) => {
      // TODO: Implement Supabase submission
      console.log('Income data:', data);
    },
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="source_type" className="block text-sm font-medium text-gray-700">
          Type de revenu
        </label>
        <select
          id="source_type"
          name="source_type"
          value={values.source_type}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="SALARY_1">Salaire déclarant 1</option>
          <option value="SALARY_2">Salaire déclarant 2</option>
          <option value="OTHER">Autre revenu</option>
        </select>
      </div>

      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
          Montant annuel brut
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="number"
            name="amount"
            id="amount"
            value={values.amount}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="0.00"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">€</span>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="tax_rate" className="block text-sm font-medium text-gray-700">
          Taux d'imposition (%)
        </label>
        <input
          type="number"
          name="tax_rate"
          id="tax_rate"
          min="0"
          max="100"
          step="0.1"
          value={values.tax_rate}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="withholding_rate" className="block text-sm font-medium text-gray-700">
          Taux de prélèvement à la source (%)
        </label>
        <input
          type="number"
          name="withholding_rate"
          id="withholding_rate"
          min="0"
          max="100"
          step="0.1"
          value={values.withholding_rate}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="year" className="block text-sm font-medium text-gray-700">
          Année
        </label>
        <input
          type="number"
          name="year"
          id="year"
          value={values.year}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Enregistrer
      </button>
    </form>
  );
};