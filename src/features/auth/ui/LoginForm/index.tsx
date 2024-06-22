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
    <form onSubmit={handleSubmit}>
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
