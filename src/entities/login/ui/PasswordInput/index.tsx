import { InputText } from '@/shared';
import React, { useState } from 'react';

type PasswordInputProps = {
  password: string;
  onPasswordChange: (value: string) => void;
};

export const PasswordInput = (props: PasswordInputProps) => {
  const { password, onPasswordChange } = props;

  return (
    <InputText
      id="password"
      onChange={onPasswordChange}
      value={password}
    />
  );
};
