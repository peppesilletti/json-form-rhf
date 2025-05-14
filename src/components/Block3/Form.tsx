import { useFormField } from '../form_hooks';

const Form3 = ({ name }: { name: string }) => {
  const age = useFormField(`${name}.age`);

  return (
    <div>
      <input placeholder="Age" {...age} />
    </div>
  );
};

export default Form3;
