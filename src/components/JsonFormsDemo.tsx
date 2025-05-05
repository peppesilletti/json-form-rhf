import { materialRenderers } from '@jsonforms/material-renderers';
import { JsonForms } from '@jsonforms/react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import Form from './Form';
import Form2 from './Form2';
import form2ControlTester from './form2ControlTester';
import formControlTester from './formControlTester';
import uischema from './uischema.json';
import { useJourneyStore } from '../App';

const classes = {
  container: {
    padding: '1em',
    width: '100%',
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
];

type Inputs = {
  form: {
    name: string;
    description: string;
  };
  form2: {
    username: string;
    petname: string;
  };
};

export const JsonFormsDemo: FC = () => {
  const journeyStore = useJourneyStore();
  const methods = useForm<Inputs>({
    defaultValues: journeyStore,
  });

  const {
    getValues,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  const data = getValues();

  return (
    <Grid
      container
      justifyContent={'center'}
      spacing={1}
      style={classes.container}>
      <Grid item sm={6}>
        <Typography variant={'h4'}>Bound data</Typography>
        <div style={classes.dataContent}>
          {/*           <pre id="boundData">{stringifiedData}</pre> */}
        </div>
        <Button
          style={classes.resetButton}
          color="primary"
          variant="contained"
          data-testid="clear-data">
          Clear data
        </Button>
      </Grid>
      <Grid item sm={6}>
        <Typography variant={'h4'}>Rendered form</Typography>
        <div style={classes.demoform}>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <JsonForms
                data={data}
                uischema={uischema}
                renderers={renderers}
                validationMode="NoValidation"
              />
              <button type="submit">Submit</button>
              <button onClick={() => journeyStore.setName('JACK')}>JACK</button>
            </form>
          </FormProvider>
        </div>
      </Grid>

      <Grid item sm={6}>
        <Typography variant={'h4'}>Bound data</Typography>
        <div style={classes.dataContent}>
          <pre id="boundData">{JSON.stringify(data, null, 2)}</pre>
        </div>
      </Grid>
    </Grid>
  );
};
