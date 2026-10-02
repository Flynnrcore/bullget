import { CategoryBadge } from '@/shared/ui/CategoryBadge';
import { financeCategories } from '@/shared/model/financeCategories';
import { latestOperations } from '../model/data';
import './LatestOperations.css';

const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
  day: 'numeric',
  month: 'short',
});

const amountFormatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  maximumFractionDigits: 0,
  signDisplay: 'always',
});

const formatOperationDate = (date: string) => dateFormatter.format(new Date(`${date}T12:00:00`));

export const LatestOperations = () => {
  return (
    <section className="latest-operations">
      <h4>Последние операции</h4>
      <ul className="latest-operations__list">
        {latestOperations.map((operation) => {
          const category = financeCategories[operation.category];

          return (
            <li className="latest-operations__item" key={operation.id}>
              <CategoryBadge category={operation.category} size="medium" />
              <div className="latest-operations__details">
                <span className="latest-operations__category">{category.label}</span>
                <span className="latest-operations__meta">
                  <span className="latest-operations__organization">{operation.organization}</span>
                  <time className="latest-operations__date" dateTime={operation.date}>
                    {formatOperationDate(operation.date)}
                  </time>
                </span>
              </div>
              <strong
                className={`latest-operations__amount ${operation.amount >= 0 ? 'latest-operations__amount--income' : 'latest-operations__amount--expense'}`}
              >
                {amountFormatter.format(operation.amount)}
              </strong>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
