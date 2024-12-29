import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LineChart, PiggyBank, TrendingUp } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Planifiez votre avenir financier
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Gérez vos finances, suivez vos dépenses et visualisez vos projections financières en un seul endroit.
          </p>
          <div className="mt-8">
            <Link
              to="/dashboard"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Commencer maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                    <PiggyBank className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Suivi des dépenses</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Catégorisez et suivez vos dépenses mensuelles pour mieux comprendre vos habitudes financières.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                    <LineChart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Projections financières</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Visualisez vos projections financières sur plusieurs années et planifiez votre avenir.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Gestion des investissements</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Suivez vos investissements et leurs rendements pour optimiser votre patrimoine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};