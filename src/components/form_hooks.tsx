import { useFormContext } from 'react-hook-form';
import { useJourneyStore } from '../App';

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

export function useWizardState() {
  const journeyStore = useJourneyStore();
  return journeyStore;
}
