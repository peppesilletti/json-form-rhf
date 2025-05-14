import { useFormField, useFormState } from '../form_hooks';

const CustomBlock = ({ name }: { name: string }) => {
  const custom = useFormField(`${name}.custom`);
  const formState = useFormState();

  console.log(formState, 'formState');

  return (
    <div>
      <h1>Custom Block</h1>
      <input placeholder="Custom" {...custom} />
    </div>
  );
};

export default CustomBlock;
