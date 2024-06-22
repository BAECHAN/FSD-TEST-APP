import { InputText } from '@/shared';
import React from 'react';

type EmailInputProps = {
  email: string;
  onEmailChange: (value: string) => void;
};

export const EmailInput = (props: EmailInputProps) => {
  const { email, onEmailChange } = props;

  return (
    <InputText
      id="email"
      onChange={onEmailChange}
      value={email}
    />
  );
};
