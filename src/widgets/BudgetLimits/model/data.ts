import type { FinanceCategoryId } from '@/shared/model/financeCategories';

export type BudgetLimit = {
  category: FinanceCategoryId;
  spent: number;
  limit: number;
};

export const budgetLimits: BudgetLimit[] = [
  { category: 'groceries', spent: 19200, limit: 30000 },
  { category: 'home', spent: 15000, limit: 18000 },
  { category: 'transport', spent: 6250, limit: 5000 },
  { category: 'shopping', spent: 8129, limit: 12000 },
  { category: 'other', spent: 1000, limit: 5000 },
];
