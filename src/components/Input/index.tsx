import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  label: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = 'text',
  ...rest
}) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>
        {label}
        <input type={type} id={name} {...rest} />
      </label>
    </div>
  );
};

export default Input;
