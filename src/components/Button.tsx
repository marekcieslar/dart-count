import React from 'react';
import styles from './Button.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  style?: React.CSSProperties;
  typeColor?: 'red' | 'black' | 'green' | 'beige';
};

function Button({ children, style, typeColor, ...rest }: ButtonProps) {
  let colorClass = styles.default;
  switch (typeColor) {
    case 'red':
      colorClass = styles.red;
      break;
    case 'black':
      colorClass = styles.black;
      break;
    case 'green':
      colorClass = styles.green;
      break;
    case 'beige':
      colorClass = styles.beige;
      break;
    default:
      colorClass = styles.default;
  }
  const className = [styles.button, colorClass].join(' ');
  return (
    <button className={className} style={style} {...rest}>
      {children}
    </button>
  );
}

export default Button;
