import { useFormField } from '../form_hooks';

const FormOne = ({ name }: { name: string }) => {
  return (
    <div>
      <input placeholder="Name" {...useFormField(`${name}.name`)} />
      <input
        placeholder="Description"
        {...useFormField(`${name}.description`)}
      />
    </div>
  );
};

export default FormOne;
