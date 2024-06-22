import React from 'react';

type InputTextProps = {
  id: string;
  onChange: (value: string) => void;
  value: string;
  label?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
};

export const InputText = (props: InputTextProps) => {
  const {
    id,
    value,
    onChange,
    label = '',
    placeholder = '',
    type = 'text',
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <label htmlFor={id}>
      {label}
      <input
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </label>
  );
};
