import type { FinanceCategoryId } from '@/shared/model/financeCategories';

export type Operation = {
  id: string;
  category: FinanceCategoryId;
  organization: string;
  date: string;
  amount: number;
};

export const latestOperations: Operation[] = [
  {
    id: 'op-1',
    category: 'groceries',
    organization: 'Перекрёсток',
    date: '2026-09-30',
    amount: -2470,
  },
  {
    id: 'op-2',
    category: 'transport',
    organization: 'Яндекс Go',
    date: '2026-09-29',
    amount: -640,
  },
  {
    id: 'op-3',
    category: 'health',
    organization: 'Аптека 36,6',
    date: '2026-09-28',
    amount: -1340,
  },
  {
    id: 'op-4',
    category: 'home',
    organization: 'ЕИРЦ',
    date: '2026-09-27',
    amount: -5870,
  },
  {
    id: 'op-5',
    category: 'restaurants',
    organization: 'Шоколадница',
    date: '2026-09-26',
    amount: -1230,
  },
  {
    id: 'op-6',
    category: 'entertainment',
    organization: 'Кинотеатр «Аврора»',
    date: '2026-09-25',
    amount: -850,
  },
  {
    id: 'op-7',
    category: 'subscriptions',
    organization: 'Яндекс Плюс',
    date: '2026-09-24',
    amount: -399,
  },
  {
    id: 'op-8',
    category: 'other',
    organization: 'Комиссия банка',
    date: '2026-09-23',
    amount: -99,
  },
];
