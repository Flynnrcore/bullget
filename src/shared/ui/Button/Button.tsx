import './Button.css';

type ButtonProps = {
  name: string;
  css?: Record<string, string>;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button = ({ name, css = {}, onClick, disabled = false }: ButtonProps) => {
  return (
    <button className="button" style={{ ...css }} onClick={onClick} disabled={disabled}>
      {name}
    </button>
  );
};
