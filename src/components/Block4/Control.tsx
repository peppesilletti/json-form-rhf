import { withJsonFormsControlProps } from '@jsonforms/react';

import Form4 from './Form';

const Form4Control = ({ path }: { path: string }) => {
  return <Form4 name={path} />;
};

const Form4ControlWithJsonForms = withJsonFormsControlProps(Form4Control);

export default Form4ControlWithJsonForms;
