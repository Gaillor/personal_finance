import { USE_MOCK_SERVICES } from '../config';

// Services Supabase
import * as supabaseHouseholdService from './household.service';
import * as supabaseIncomeService from './income.service';
import * as supabaseExpenseService from './expense.service';
import * as supabaseInvestmentService from './investment.service';

// Services Mock
import * as mockHouseholdService from './mock/household.service';
import * as mockIncomeService from './mock/income.service';
import * as mockExpenseService from './mock/expense.service';
import * as mockInvestmentService from './mock/investment.service';

export const services = USE_MOCK_SERVICES
  ? {
      household: mockHouseholdService,
      income: mockIncomeService,
      expense: mockExpenseService,
      investment: mockInvestmentService,
    }
  : {
      household: supabaseHouseholdService,
      income: supabaseIncomeService,
      expense: supabaseExpenseService,
      investment: supabaseInvestmentService,
    };