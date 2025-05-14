import { zodResolver } from '@hookform/resolvers/zod';
import { UISchemaElement } from '@jsonforms/core';
import { materialRenderers } from '@jsonforms/material-renderers';
import { JsonForms } from '@jsonforms/react';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import Form3 from './Block3/Control';
import Form4 from './Block4/Control';
import Form from './BlockOne/Control';
import Form2 from './BlockTwo/Control';
import CustomBlock from './CustomBlock/Control';
import customBlockControlTester from './customControlTester';
import form2ControlTester from './form2ControlTester';
import form3ControlTester from './form3ControlTester';
import form4ControlTester from './form4ControlTester';
import formControlTester from './formControlTester';

const classes = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    padding: '0.25em',
  },
  dataContent: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '0.25em',
    backgroundColor: '#cecece',
    marginBottom: '1rem',
  },
  resetButton: {
    margin: 'auto !important',
    display: 'block !important',
  },
  demoform: {
    margin: 'auto',
    padding: '1rem',
  },
};

const renderers = [
  ...materialRenderers,
  //register custom renderers
  { tester: formControlTester, renderer: Form },
  { tester: form2ControlTester, renderer: Form2 },
  { tester: form3ControlTester, renderer: Form3 },
  { tester: form4ControlTester, renderer: Form4 },
  { tester: customBlockControlTester, renderer: CustomBlock },
];

export const Step: FC<{
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValues: any;
  schema: z.ZodSchema;
  uischema: UISchemaElement;
  onSubmit: (data: unknown) => void;
  prevStep: () => void;
}> = ({ defaultValues, schema, uischema, onSubmit, prevStep }) => {
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const {
    watch,
    formState: { errors },
  } = methods;

  const data = watch();

  const handleSubmit = (data: unknown) => {
    onSubmit(data);
  };

  console.log(errors, 'errors');

  return (
    <div style={classes.container}>
      <div>
        <div style={classes.demoform}>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSubmit)}>
              <JsonForms
                data={data}
                uischema={uischema}
                renderers={renderers}
                validationMode="NoValidation"
              />

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button
                  type="button"
                  onClick={e => {
                    e.preventDefault();
                    prevStep();
                  }}>
                  Prev
                </button>
                <input type="submit" value="Next" />
              </div>
            </form>
          </FormProvider>
          <div style={{ marginTop: '1rem' }}></div>
        </div>
      </div>
    </div>
  );
};
