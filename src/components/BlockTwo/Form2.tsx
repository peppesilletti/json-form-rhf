import { useFormField } from '../form_hooks';

const FormTwo = ({ name }: { name: string }) => {
  const username = useFormField(`${name}.username`);
  const petname = useFormField(`${name}.petname`);

  return (
    <div>
      <input placeholder="Username" {...username} />
      <input placeholder="Pet Name" {...petname} />
    </div>
  );
};

export default FormTwo;
