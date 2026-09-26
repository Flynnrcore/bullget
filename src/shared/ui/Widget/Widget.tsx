import type { ReactNode } from 'react';
import './Widget.css';

type WidgetProps = {
  children: ReactNode;
  css?: Record<string, string>;
};

export const Widget = ({ children, css = {} }: WidgetProps) => {
  return (
    <div style={{ ...css }} className="widget-wrapper">
      {children}
    </div>
  );
};
