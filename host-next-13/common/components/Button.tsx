import React from 'react';

const style = {
  background: '#ed2311',
  color: '#ff',
  margin: '12px',
  padding: 12,
  border: 0,
  borderRadius: '8px'
};

interface ButtonProps {
  text: string
  onClick: () => void
  redirectsTo?: string
}

const Button = ({text, onClick}: ButtonProps) => <button style={style} onClick={onClick}>{text}</button>;

export default Button;
