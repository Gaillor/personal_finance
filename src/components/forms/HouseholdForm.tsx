import React from 'react';
import { useForm } from './useForm';

interface HouseholdFormData {
  tax_parts: number;
}

export const HouseholdForm: React.FC = () => {
  const { values, handleChange, handleSubmit } = useForm<HouseholdFormData>({
    initialValues: {
      tax_parts: 1,
    },
    onSubmit: async (data) => {
      // TODO: Implement Supabase submission
      console.log('Household data:', data);
    },
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="tax_parts" className="block text-sm font-medium text-gray-700">
          Nombre de parts fiscales
        </label>
        <input
          type="number"
          id="tax_parts"
          name="tax_parts"
          min="1"
          step="0.5"
          value={values.tax_parts}
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