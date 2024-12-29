import { Income, MonthlyExpense, Investment, Household } from '../types/financial';

// Simule le stockage local
class LocalStorage {
  private getItem<T>(key: string): T[] {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
  }

  private setItem<T>(key: string, value: T[]): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Méthodes pour gérer les données
  async getHousehold(): Promise<Household | null> {
    const households = this.getItem<Household>('households');
    return households[0] || null;
  }

  async createHousehold(household: Omit<Household, 'id'>): Promise<Household> {
    const newHousehold = { ...household, id: crypto.randomUUID() };
    this.setItem('households', [newHousehold]);
    return newHousehold;
  }

  async getIncomes(): Promise<Income[]> {
    return this.getItem<Income>('incomes');
  }

  async createIncome(income: Omit<Income, 'id'>): Promise<Income> {
    const incomes = this.getItem<Income>('incomes');
    const newIncome = { ...income, id: crypto.randomUUID() };
    this.setItem('incomes', [...incomes, newIncome]);
    return newIncome;
  }

  async getExpenses(): Promise<MonthlyExpense[]> {
    return this.getItem<MonthlyExpense>('expenses');
  }

  async createExpense(expense: Omit<MonthlyExpense, 'id'>): Promise<MonthlyExpense> {
    const expenses = this.getItem<MonthlyExpense>('expenses');
    const newExpense = { ...expense, id: crypto.randomUUID() };
    this.setItem('expenses', [...expenses, newExpense]);
    return newExpense;
  }

  async getInvestments(): Promise<Investment[]> {
    return this.getItem<Investment>('investments');
  }

  async createInvestment(investment: Omit<Investment, 'id'>): Promise<Investment> {
    const investments = this.getItem<Investment>('investments');
    const newInvestment = { ...investment, id: crypto.randomUUID() };
    this.setItem('investments', [...investments, newInvestment]);
    return newInvestment;
  }
}

export const mockStorage = new LocalStorage();