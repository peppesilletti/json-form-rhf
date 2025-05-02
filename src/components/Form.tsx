import { withJsonFormsControlProps } from '@jsonforms/react';
import { useFormContext } from 'react-hook-form';

const FormControl = ({ path }) => {
  const { register } = useFormContext();
  return (
    <div>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        {...register(`${path}.name`, { required: true })}
        placeholder="Name"
      />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register(`${path}.description`)} placeholder="Description" />
    </div>
  );
};

const FormControlWithJsonForms = withJsonFormsControlProps(FormControl);

export default FormControlWithJsonForms;
