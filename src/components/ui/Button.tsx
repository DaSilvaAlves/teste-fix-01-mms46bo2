import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () =>;
}

const Button = ({ children, type GeneratedType = 'button', onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="button"
    >
      {children}
    </button>
  );
};

export default Button;