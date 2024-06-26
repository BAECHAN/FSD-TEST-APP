import { InputTextInForm } from '@/shared/ui';
import { forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type EmailInputProps = {
  isError: boolean;
  isDirty: boolean;
} & UseFormRegisterReturn;

const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
  ({ isError, isDirty, ...rest }: EmailInputProps, ref) => {
    return (
      <InputTextInForm
        id="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        isError={isError}
        isDirty={isDirty}
        ref={ref}
        register={rest}
      />
    );
  },
);

EmailInput.displayName = 'EmailInput';

export default EmailInput;
