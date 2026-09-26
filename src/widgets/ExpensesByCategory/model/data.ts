export const expenseCategories = [
  { name: 'Продукты', value: 19200, color: '#529275' },
  { name: 'Дом', value: 15000, color: '#FED174' },
  { name: 'Транспорт', value: 6250, color: '#FEAB8D' },
  { name: 'Покупки', value: 8129, color: '#AFBDA0' },
  { name: 'Другое', value: 1000, color: '#C8C8CA' },
];

export const totalExpenses = expenseCategories.reduce(
  (total, category) => total + category.value,
  0,
);
