import { withJsonFormsControlProps } from '@jsonforms/react';

import FormTwo from './Form2';

const FormTwoControl = ({ path }: { path: string }) => {
  return <FormTwo name={path} />;
};

const FormTwoControlWithJsonForms = withJsonFormsControlProps(FormTwoControl);

export default FormTwoControlWithJsonForms;
