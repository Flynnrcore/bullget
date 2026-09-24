import { Button } from '../../shared/ui/Button';
import { IconBadge } from '../../shared/ui/IconBadge';
import './MainPage.css';

export const MainPage = () => {
  return (
    <>
      <div className="brand">
        <div className="brand__logo">
          <h1>буль</h1>
          <img src="/icon.webp" />
          <h1>джет</h1>
        </div>
        <p className="text-accent">финансы без лишних сложностей</p>
      </div>
      <div className="hero page-section">
        <div className="hero__content">
          <h2>
            Деньги
            <br /> под контролем.
            <br /> Планы - ближе.
          </h2>
          <p className="text-secondary">
            {' '}
            Учитывайте расходы, планируйте бюджет и понимайте - сколько можно потратить
          </p>
          <Button name="начать бесплатно →" css={{ marginTop: '8px' }} />
        </div>
      </div>
      <div className="feature-section page-section">
        <h3>Всё для спокойного бюджета</h3>
        <div className="feature-card">
          <IconBadge type="success" />
          <div>
            <h4>Расходы по категориям</h4>
            <p className="text-secondary">Видно куда уходят деньги</p>
          </div>
        </div>
        <div className="feature-card">
          <IconBadge type="warning" />
          <div>
            <h4>Статистика расходов и доходов</h4>
            <p className="text-secondary">Вся картина за неделю, месяц, год</p>
          </div>
        </div>
        <div className="feature-card">
          <IconBadge type="error" />
          <div>
            <h4>Планирование бюджета</h4>
            <p className="text-secondary">Лимиты, цели и обязательные платежи</p>
          </div>
        </div>
      </div>
      <div className="analytics-section page-section">
        <div>
          <h3>Не просто цифры - понятная картина финансов</h3>
          <p className="text-secondary">
            Сравнивайте месяцы, отмечайте свои финансовые привычки и находите возможности для
            накоплений
          </p>
        </div>
        <picture className="analytics-section__image">
          <source media="(max-width: 1023px)" srcSet="/chart-screen.webp" />
          <img src="/cabinet-screen.webp" alt="Обзор финансового кабинета" />
        </picture>
      </div>
      <div className="steps-section page-section">
        <h3>Как начать или 3 простых шага:</h3>
        <div className="steps-section__item">
          <h2 className="text-accent">01</h2>
          <div>
            <h4>Создайте аккаунт</h4>
            <p className="text-secondary">Пару минут чтобы начать вести бюджет</p>
          </div>
        </div>
        <div className="steps-section__item">
          <h2 className="text-accent">02</h2>
          <div>
            <h4>Добавьте доходы и расходы</h4>
            <p className="text-secondary">Вносите операции в удобном формате</p>
          </div>
        </div>
        <div className="steps-section__item">
          <h2 className="text-accent">03</h2>
          <div>
            <h4>Спланируйте период</h4>
            <p className="text-secondary">
              Установите лимиты, копите на цели и следите за прогрессом
            </p>
          </div>
        </div>
      </div>
      <div className="cta-section page-section">
        <h3>Ваш бюджет начинается здесь</h3>
        <p className="text-accent">
          Больше осознанности, больше возможностей для того что делает Вас счастливее
        </p>
      </div>
    </>
  );
};
