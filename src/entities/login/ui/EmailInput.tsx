import { LoginInputProps } from '@/entities/login/type/InputType';
import { InputTextInForm } from '@/shared/ui';
import { forwardRef } from 'react';

const EmailInput = forwardRef<HTMLInputElement, LoginInputProps>(
  ({ isError, isDirty, ...rest }: LoginInputProps, ref) => {
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
