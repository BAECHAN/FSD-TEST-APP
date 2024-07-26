import { LoginInputProps } from '@/entities/login/type/InputType';
import { InputTextInForm } from '@/shared/ui';
import { forwardRef } from 'react';

const PasswordInput = forwardRef<HTMLInputElement, LoginInputProps>(
  ({ isError, isDirty, ...rest }: LoginInputProps, ref) => {
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
