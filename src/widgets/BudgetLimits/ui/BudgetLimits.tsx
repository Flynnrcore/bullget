import type { CSSProperties } from 'react';
import { financeCategories } from '@/shared/model/financeCategories';
import { CategoryBadge } from '@/shared/ui/CategoryBadge';
import { budgetLimits } from '../model/data';
import './BudgetLimits.css';

const amountFormatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  maximumFractionDigits: 0,
});

export const BudgetLimits = () => {
  return (
    <section className="budget-limits">
      <h4>Лимиты</h4>
      <ul className="budget-limits__list">
        {budgetLimits.map(({ category, spent, limit }) => {
          const categoryDetails = financeCategories[category];
          const exceeded = spent > limit;
          const progress = limit > 0 ? (spent / limit) * 100 : 0;
          const color = exceeded ? '#FEAB8D' : '#529275';
          const status = exceeded
            ? `Превышение на ${amountFormatter.format(spent - limit)}`
            : `${Math.round(progress)}% использовано`;

          return (
            <li
              className="budget-limits__item"
              key={category}
              style={{ '--limit-color': color } as CSSProperties}
            >
              <div className="budget-limits__details">
                <div className="budget-limits__category-info">
                  <CategoryBadge category={category} />
                  <span className="budget-limits__category">{categoryDetails.label}</span>
                </div>
                <span className="budget-limits__amounts">
                  <span className="budget-limits__spent">{amountFormatter.format(spent)}</span>
                  {' / '}
                  {amountFormatter.format(limit)}
                </span>
              </div>
              <div
                className="budget-limits__progress"
                role="progressbar"
                aria-label={`Лимит категории «${categoryDetails.label}»`}
                aria-valuemin={0}
                aria-valuemax={limit}
                aria-valuenow={Math.min(spent, limit)}
                aria-valuetext={`${amountFormatter.format(spent)} из ${amountFormatter.format(limit)}${exceeded ? ', лимит превышен' : ''}`}
              >
                <div
                  className="budget-limits__progress-value"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <span className="budget-limits__status">{status}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
