import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { formatCurrency } from '../../utils/formatters';

interface ProjectionData {
  year: number;
  savings_capacity: number;
  liquidity: number;
  investment_value: number;
  cumulative_returns: number;
}

interface ProjectionsChartProps {
  data: ProjectionData[];
}

export const ProjectionsChart: React.FC<ProjectionsChartProps> = ({ data }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">
        Projections financières
      </h2>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis tickFormatter={(value) => formatCurrency(value)} />
            <Tooltip formatter={(value) => formatCurrency(Number(value))} />
            <Legend />
            <Line
              type="monotone"
              dataKey="liquidity"
              name="Liquidités"
              stroke="#6366f1"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="investment_value"
              name="Valeur des investissements"
              stroke="#10b981"
            />
            <Line
              type="monotone"
              dataKey="cumulative_returns"
              name="Rendements cumulés"
              stroke="#f59e0b"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};