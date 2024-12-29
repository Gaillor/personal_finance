import React from 'react';
import { Wallet, Receipt, PiggyBank } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

interface FinancialSummaryProps {
  monthlyIncome: number;
  monthlyExpenses: number;
  savingsCapacity: number;
}

export const FinancialSummary: React.FC<FinancialSummaryProps> = ({
  monthlyIncome,
  monthlyExpenses,
  savingsCapacity,
}) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Wallet className="h-6 w-6 text-gray-400" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Revenus mensuels
                </dt>
                <dd className="text-lg font-medium text-gray-900">
                  {formatCurrency(monthlyIncome)}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Receipt className="h-6 w-6 text-gray-400" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Dépenses mensuelles
                </dt>
                <dd className="text-lg font-medium text-gray-900">
                  {formatCurrency(monthlyExpenses)}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <PiggyBank className="h-6 w-6 text-gray-400" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Capacité d'épargne
                </dt>
                <dd className="text-lg font-medium text-gray-900">
                  {formatCurrency(savingsCapacity)}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};