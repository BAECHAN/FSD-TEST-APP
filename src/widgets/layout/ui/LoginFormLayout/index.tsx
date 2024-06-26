import { LoginForm } from '@/features/auth';

export const LoginFormLayout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
};
