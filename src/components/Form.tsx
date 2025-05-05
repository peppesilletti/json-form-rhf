import { withJsonFormsControlProps } from '@jsonforms/react';
import { useFormContext } from 'react-hook-form';
import { useJourneyStore } from '../App';

const FormControl = ({ path }) => {
  const journeyStore = useJourneyStore();
  const { register } = useFormContext();
  return (
    <div>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        {...register(`${path}.name`, { required: true })}
        onChange={event => journeyStore.setName(event.target.value)}
        placeholder="Name"
      />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        {...register(`${path}.description`)}
        placeholder="Description"
        onChange={event => journeyStore.setDesription(event.target.value)}
      />
    </div>
  );
};

const FormControlWithJsonForms = withJsonFormsControlProps(FormControl);

export default FormControlWithJsonForms;
