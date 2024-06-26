import { EmailInput, PasswordInput } from '@/entities/login';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
  email: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormValues> = async data => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded shadow-md w-full max-w-md"
    >
      <h2 className="text-2xl mb-4">Login</h2>

      <div className="mb-4">
        <EmailInput
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address',
            },
          })}
          isDirty={!!dirtyFields.email}
          isError={!!(dirtyFields.email && errors.email)}
        />
        {errors.email && dirtyFields.email && (
          <small
            className="text-red-500 mt-1"
            role="alertdialog"
          >
            {errors.email.message}
          </small>
        )}
      </div>

      <div className="mb-4">
        <PasswordInput
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: `Password must have at least 8 characters`,
            },
          })}
          isDirty={!!dirtyFields.password}
          isError={!!(dirtyFields.password && errors.password)}
        />
        {errors.password && (
          <small
            className="text-red-500 mt-1"
            role="alertdialog"
          >
            {errors.password.message}
          </small>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={
          isSubmitting || errors.email || errors.password ? true : false
        }
      >
        Submit
      </button>
    </form>
  );
};
