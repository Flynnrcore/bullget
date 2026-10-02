import { ArrowDown, ArrowUp, PiggyBank } from 'lucide-react';
import './FinanceSummary.css';

type FinanceSummaryKind = 'income' | 'expense' | 'balance';

type FinanceSummaryProps = {
  kind: FinanceSummaryKind;
  title: string;
  amount: string;
  trend?: string;
};

const iconByKind = {
  income: ArrowUp,
  expense: ArrowDown,
  balance: PiggyBank,
};

export const FinanceSummary = ({ kind, title, amount, trend }: FinanceSummaryProps) => {
  const Icon = iconByKind[kind];

  return (
    <div className={`finance-summary finance-summary--${kind}`}>
      <span className="finance-summary__badge" aria-hidden="true">
        <Icon size={22} strokeWidth={2} />
      </span>
      <div className="finance-summary__content">
        <span className="finance-summary__title">{title}</span>
        <strong className="finance-summary__amount">{amount}</strong>
        {trend && <span className="finance-summary__trend">{trend}</span>}
      </div>
    </div>
  );
};
