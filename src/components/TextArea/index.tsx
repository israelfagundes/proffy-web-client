import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  type?: string;
  label: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  name,
  type = 'text',
  ...rest
}) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>
        {label}
        <textarea id={name} {...rest} />
      </label>
    </div>
  );
};

export default TextArea;
