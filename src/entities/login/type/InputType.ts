import { UseFormRegisterReturn } from 'react-hook-form';

export type LoginInputProps = {
  isError: boolean;
  isDirty: boolean;
} & UseFormRegisterReturn;
