import { withJsonFormsControlProps } from '@jsonforms/react';

import Summary from './Form';

const SummaryControl = () => {
  return <Summary />;
};

const SummaryWithJsonForms = withJsonFormsControlProps(SummaryControl);

export default SummaryWithJsonForms;
