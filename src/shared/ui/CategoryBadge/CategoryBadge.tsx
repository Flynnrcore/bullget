import type { CSSProperties } from 'react';
import { financeCategories, type FinanceCategoryId } from '@/shared/model/financeCategories';
import './CategoryBadge.css';

type CategoryBadgeProps = {
  category: FinanceCategoryId;
  size?: 'small' | 'medium';
};

export const CategoryBadge = ({ category, size = 'small' }: CategoryBadgeProps) => {
  const { icon: Icon, color, background } = financeCategories[category];

  return (
    <span
      className={`category-badge category-badge--${size}`}
      aria-hidden="true"
      style={
        {
          '--category-badge-color': color,
          '--category-badge-background': background,
        } as CSSProperties
      }
    >
      <Icon size={18} strokeWidth={2} />
    </span>
  );
};
