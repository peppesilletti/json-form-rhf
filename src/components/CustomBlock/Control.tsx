import { withJsonFormsControlProps } from '@jsonforms/react';

import CustomBlock from './Form';

const CustomBlockControl = ({ path }: { path: string }) => {
  return <CustomBlock name={path} />;
};

const CustomBlockControlWithJsonForms =
  withJsonFormsControlProps(CustomBlockControl);

export default CustomBlockControlWithJsonForms;
