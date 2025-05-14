import { withJsonFormsControlProps } from '@jsonforms/react';

import FormOne from './Form';

const FormOneControl = ({ path }: { path: string }) => {
  return <FormOne name={path} />;
};

const FormOneControlWithJsonForms = withJsonFormsControlProps(FormOneControl);

export default FormOneControlWithJsonForms;
