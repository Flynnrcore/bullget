import { Label, Pie, PieChart, Sector, Tooltip } from 'recharts';
import { expenseCategories, totalExpenses } from '../model/data';
import './ExpensesByCategory.css';

export const ExpensesByCategory = () => {
  return (
    <>
      <h4>Расходы по категориям</h4>
      <div className="category-pie-content">
        <div className="category-pie-chart-container">
          <PieChart responsive className="category-pie-chart">
            <Pie
              data={expenseCategories}
              dataKey="value"
              nameKey="name"
              outerRadius="85%"
              innerRadius="55%"
              paddingAngle={1}
              isAnimationActive={false}
              shape={(props) => {
                const { index, ...sectorProps } = props;
                const category = expenseCategories[index % expenseCategories.length];

                return <Sector {...sectorProps} fill={category.color} />;
              }}
            />
            <Tooltip
              trigger="click"
              cursor={false}
              formatter={(value) => [`${value} ₽`, 'Сумма']}
              contentStyle={{
                border: '1px solid var(--border)',
                borderRadius: '8px',
                boxShadow: '0 8px 24px rgb(16 30 39 / 12%)',
              }}
            />
            <Label
              position="center"
              content={({ x = 0, y = 0 }) => (
                <g textAnchor="middle">
                  <text x={Number(x)} y={Number(y)} fill="#101e27" fontSize="1em" fontWeight={800}>
                    {totalExpenses.toLocaleString('ru-RU')} ₽
                  </text>
                  <text x={Number(x)} y={Number(y) + 12} fill="#6b7280" fontSize="0.8em">
                    всего
                  </text>
                </g>
              )}
            />
          </PieChart>
        </div>
        <div className="category-pie-legend">
          {expenseCategories.map(({ name, value, color }) => (
            <div className="category-pie-legend__item" key={name}>
              <span
                className="category-pie-legend__marker"
                aria-hidden="true"
                style={{ backgroundColor: color }}
              />
              <p>{name}</p>
              <b>{value.toLocaleString('ru-RU')} ₽</b>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
