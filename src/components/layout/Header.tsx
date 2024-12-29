import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Home, PiggyBank } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-indigo-600 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <LineChart className="h-8 w-8" />
              <span className="font-bold text-xl">FinancePro</span>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-indigo-700"
            >
              <Home className="h-5 w-5" />
              <span>Accueil</span>
            </Link>
            <Link
              to="/dashboard"
              className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-indigo-700"
            >
              <PiggyBank className="h-5 w-5" />
              <span>Tableau de bord</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};