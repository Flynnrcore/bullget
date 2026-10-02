import { useState } from 'react';
import { Button } from '@/shared/ui/Button';
import { DateRangePicker, type DateRange } from '@/shared/ui/DateRangePicker';
import { Widget } from '@/shared/ui/Widget';
import { FinanceSummary } from '@/features/CabinetOverview/ui/FinanceSummary';
import { BudgetLimits } from '@/widgets/BudgetLimits';
import { ExpensesByCategory } from '@/widgets/ExpensesByCategory';
import { LatestOperations } from '@/widgets/LatestOperations';
import './CabinetPage.css';
import { IncomeAndExpenses } from '@/widgets/ IncomeAndExpenses';

const initialPeriod: DateRange = [new Date(2026, 8, 1), new Date(2026, 8, 30)];

export const CabinetPage = () => {
  const [period, setPeriod] = useState<DateRange>(initialPeriod);

  return (
    <main className="cabinet-page">
      <section className="period-section">
        <h3>Обзор финансов</h3>
        <DateRangePicker value={period} onChange={setPeriod} css={{ width: '50%' }} />
      </section>
      <section className="mini-widgets">
        <Widget>
          <FinanceSummary kind="income" title="Доходы" amount="10 000 ₽" />
        </Widget>
        <Widget>
          <FinanceSummary kind="expense" title="Расходы" amount="200 000 ₽" />
        </Widget>
        <Widget>
          <FinanceSummary kind="balance" title="Остаток" amount="10,40 ₽" />
        </Widget>
      </section>
      <section className="result-economy">
        <h4>Можно потратить</h4>
        <h2 className="text-accent">31 600 ₽</h2>
        <p className="text-secondary">
          После платежей
          <br /> и накоплений
        </p>
      </section>
      <Button name="＋ Добавить операцию" css={{ width: '100%' }} />
      <div className="main-widgets">
        <Widget>
          <IncomeAndExpenses />
        </Widget>
        <Widget>
          <ExpensesByCategory />
        </Widget>
        <Widget>
          <BudgetLimits />
        </Widget>
        <Widget>
          <LatestOperations />
        </Widget>
      </div>
    </main>
  );
};
