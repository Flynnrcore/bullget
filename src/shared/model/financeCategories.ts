import {
  BusFront,
  Clapperboard,
  Ellipsis,
  GraduationCap,
  HeartPulse,
  House,
  PawPrint,
  Plane,
  Repeat,
  ShoppingBag,
  ShoppingBasket,
  Utensils,
  type LucideIcon,
} from 'lucide-react';

export const financeCategories = {
  entertainment: {
    label: 'Развлечения',
    icon: Clapperboard,
    color: '#b1360f',
    background: '#ffe3d8',
  },
  other: { label: 'Другое', icon: Ellipsis, color: '#64748b', background: '#f1f5f9' },
  transport: { label: 'Транспорт', icon: BusFront, color: '#0369a1', background: '#e0f2fe' },
  groceries: { label: 'Продукты', icon: ShoppingBasket, color: '#0a5433', background: '#e7f6e5' },
  health: { label: 'Здоровье', icon: HeartPulse, color: '#be123c', background: '#ffe4e6' },
  home: { label: 'Дом', icon: House, color: '#4d7c0f', background: '#ecfccb' },
  restaurants: {
    label: 'Кафе и рестораны',
    icon: Utensils,
    color: '#c2410c',
    background: '#ffedd5',
  },
  shopping: { label: 'Покупки', icon: ShoppingBag, color: '#1d4ed8', background: '#dbeafe' },
  subscriptions: { label: 'Подписки', icon: Repeat, color: '#7c3aed', background: '#ede9fe' },
  education: {
    label: 'Образование',
    icon: GraduationCap,
    color: '#0f766e',
    background: '#ccfbf1',
  },
  travel: { label: 'Поездки', icon: Plane, color: '#b45309', background: '#fef3c7' },
  pets: { label: 'Питомцы', icon: PawPrint, color: '#9333ea', background: '#f3e8ff' },
} satisfies Record<string, { label: string; icon: LucideIcon; color: string; background: string }>;

export type FinanceCategoryId = keyof typeof financeCategories;
