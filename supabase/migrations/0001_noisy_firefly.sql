/*
  # Initial Financial Planning Schema

  1. New Tables
    - `users`: Base user information
    - `households`: Fiscal household information
    - `income_sources`: Income tracking (salaries and other sources)
    - `monthly_expenses`: Monthly expense tracking
    - `investments`: Investment tracking
    - `financial_projections`: Multi-year financial projections

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
    - Ensure data isolation between users

  3. Relationships
    - All tables are linked to users through user_id
    - Households link to users
    - All financial data links to households
*/

-- Users table (extends Supabase auth.users)
CREATE TABLE users (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  email text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Households table
CREATE TABLE households (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id),
  tax_parts numeric NOT NULL DEFAULT 1,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Income sources table
CREATE TABLE income_sources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  household_id uuid NOT NULL REFERENCES households(id),
  source_type text NOT NULL, -- 'SALARY_1', 'SALARY_2', 'OTHER'
  amount numeric NOT NULL DEFAULT 0,
  tax_rate numeric NOT NULL DEFAULT 0,
  withholding_rate numeric NOT NULL DEFAULT 0, -- Prélèvement à la source
  year integer NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Monthly expenses table
CREATE TABLE monthly_expenses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  household_id uuid NOT NULL REFERENCES households(id),
  category text NOT NULL, -- 'CURRENT' or 'FIXED'
  description text NOT NULL,
  amount numeric NOT NULL DEFAULT 0,
  date date NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Investments table
CREATE TABLE investments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  household_id uuid NOT NULL REFERENCES households(id),
  investment_type text NOT NULL,
  amount numeric NOT NULL DEFAULT 0,
  return_rate numeric NOT NULL DEFAULT 0,
  start_date date NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Financial projections table
CREATE TABLE financial_projections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  household_id uuid NOT NULL REFERENCES households(id),
  year integer NOT NULL,
  savings_capacity numeric NOT NULL DEFAULT 0,
  liquidity numeric NOT NULL DEFAULT 0,
  cumulative_returns numeric NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE households ENABLE ROW LEVEL SECURITY;
ALTER TABLE income_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE monthly_expenses ENABLE ROW LEVEL SECURITY;
ALTER TABLE investments ENABLE ROW LEVEL SECURITY;
ALTER TABLE financial_projections ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can manage their own data"
  ON users
  USING (id = auth.uid());

CREATE POLICY "Users can manage their households"
  ON households
  USING (user_id = auth.uid());

CREATE POLICY "Users can manage their household income sources"
  ON income_sources
  USING (household_id IN (
    SELECT id FROM households WHERE user_id = auth.uid()
  ));

CREATE POLICY "Users can manage their household expenses"
  ON monthly_expenses
  USING (household_id IN (
    SELECT id FROM households WHERE user_id = auth.uid()
  ));

CREATE POLICY "Users can manage their household investments"
  ON investments
  USING (household_id IN (
    SELECT id FROM households WHERE user_id = auth.uid()
  ));

CREATE POLICY "Users can manage their household projections"
  ON financial_projections
  USING (household_id IN (
    SELECT id FROM households WHERE user_id = auth.uid()
  ));

-- Create indexes for better performance
CREATE INDEX idx_households_user_id ON households(user_id);
CREATE INDEX idx_income_sources_household_id ON income_sources(household_id);
CREATE INDEX idx_monthly_expenses_household_id ON monthly_expenses(household_id);
CREATE INDEX idx_investments_household_id ON investments(household_id);
CREATE INDEX idx_financial_projections_household_id ON financial_projections(household_id);