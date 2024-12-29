export interface Income {
  id?: string;
  source_type: 'SALARY_1' | 'SALARY_2' | 'OTHER';
  amount: number;
  tax_rate: number;
  withholding_rate: number;
  year: number;
}

export interface MonthlyExpense {
  id?: string;
  category: 'CURRENT' | 'FIXED';
  description: string;
  amount: number;
  date: string;
}

export interface Investment {
  id?: string;
  investment_type: string;
  amount: number;
  return_rate: number;
  start_date: string;
}

export interface Household {
  id?: string;
  tax_parts: number;
}