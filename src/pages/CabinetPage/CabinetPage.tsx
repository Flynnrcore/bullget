import { Button } from '@/shared/ui/Button';
import { Widget } from '@/shared/ui/Widget';
import { ExpensesByCategory } from '@/widgets/ExpensesByCategory';
import './CabinetPage.css';

export const CabinetPage = () => {
  return (
    <main className="cabinet-page">
      <section className="period-section">
        <h3>Обзор финансов</h3>
        <select>
          <option>Сентябрь 2026</option>
        </select>
      </section>
      <section className="mini-widgets">
        <Widget>test</Widget>
        <Widget>test</Widget>
        <Widget>test</Widget>
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
      <Widget>
        <h4>Доходы и расходы</h4>
      </Widget>
      <Widget>
        <ExpensesByCategory />
      </Widget>
      <Widget>
        <h4>Лимиты</h4>
      </Widget>
      <Widget>
        <h4>Последние операции</h4>
      </Widget>
    </main>
  );
};
