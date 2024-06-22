import React, { useState } from 'react';
import { EmailInput } from '@entities/login/ui/EmailInput';
import { PasswordInput } from '@entities/login/ui/PasswordInput';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 로직 처리
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-96 p-4 bg-gray-100 rounded-md shadow-md"
    >
      <EmailInput
        email={email}
        onEmailChange={value => setEmail(value)}
      />
      <PasswordInput
        password={password}
        onPasswordChange={value => setPassword(value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};
