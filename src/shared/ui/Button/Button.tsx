import './Button.css';

export const Button = ({ name, css = {} }: { name: string; css?: Record<string, string> }) => {
  return <button style={{ ...css }}>{name}</button>;
};
