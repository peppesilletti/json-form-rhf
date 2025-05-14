import { useFormContext } from 'react-hook-form';

export function useFormField(fieldName: string) {
  const { register } = useFormContext();

  return {
    ...register(fieldName),
  };
}

export function useFormState() {
  const { getValues } = useFormContext();

  return getValues();
}
