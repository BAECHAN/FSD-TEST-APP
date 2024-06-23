import { forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { InputTextInForm } from 'shared/ui';

type PasswordInputProps = {
  isError: boolean;
  isDirty: boolean;
} & UseFormRegisterReturn;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ isError, isDirty, ...rest }: PasswordInputProps, ref) => {
    return (
      <InputTextInForm
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        isError={isError}
        isDirty={isDirty}
        ref={ref}
        register={rest}
      />
    );
  },
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
