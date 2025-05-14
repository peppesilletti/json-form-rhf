import { withJsonFormsControlProps } from '@jsonforms/react';

import Form3 from './Form';

const Form3Control = ({ path }: { path: string }) => {
  return <Form3 name={path} />;
};

const FormOneControlWithJsonForms = withJsonFormsControlProps(Form3Control);

export default FormOneControlWithJsonForms;
