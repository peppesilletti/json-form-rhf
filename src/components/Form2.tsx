import { withJsonFormsControlProps } from '@jsonforms/react';
import { useFormContext } from 'react-hook-form';

const Form2Control = ({ path }) => {
  const { register } = useFormContext();
  return (
    <div>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        {...register(`${path}.nickname`, { required: true })}
        placeholder="Nickanme"
      />

      {/* <Rating
    value={data}
    updateValue={(newValue: number) => handleChange(path, newValue)}
  /> */}

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register(`${path}.petname`)} placeholder="Pet Name" />
    </div>
  );
};

const Form2ControlWithJsonForms = withJsonFormsControlProps(Form2Control);

export default Form2ControlWithJsonForms;
