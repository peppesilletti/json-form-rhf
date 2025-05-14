import { useFormField } from '../form_hooks';

const Form4 = ({ name }: { name: string }) => {
  const city = useFormField(`${name}.city`);

  return (
    <div>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="City" {...city} />
    </div>
  );
};

export default Form4;
