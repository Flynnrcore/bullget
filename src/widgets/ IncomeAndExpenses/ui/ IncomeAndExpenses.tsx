import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { incomeAndExpensesData } from '../model/data';
import './IncomeAndExpenses.css';

export const IncomeAndExpenses = () => {
  return (
    <section className="income-expenses-widget">
      <h4>Доходы и расходы</h4>
      <div className="income-expenses-chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={incomeAndExpensesData} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
            <CartesianGrid vertical={false} stroke="var(--border)" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
              tickMargin={8}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
              tickFormatter={(value) => `${value / 1000}к`}
              width={42}
            />
            <Tooltip
              cursor={{ fill: 'rgb(16 30 39 / 4%)' }}
              formatter={(value) => [`${Number(value).toLocaleString('ru-RU')} ₽`]}
              contentStyle={{
                border: '1px solid var(--border)',
                borderRadius: '8px',
                boxShadow: '0 8px 24px rgb(16 30 39 / 12%)',
              }}
            />
            <Legend height={32} iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
            <Bar dataKey="income" name="Доходы" fill="#529275" radius={[4, 4, 0, 0]} />
            <Bar dataKey="expenses" name="Расходы" fill="#FEAB8D" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};
