import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

function Button({ children, style, ...rest }: ButtonProps) {
  return (
    <button
      style={{
        width: '100%',
        height: '100%',
        fontSize: '1.1rem',
        padding: 0,
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
