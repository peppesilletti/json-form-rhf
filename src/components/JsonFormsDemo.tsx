import { INIT, UPDATE_DATA } from '@jsonforms/core';
import { materialRenderers } from '@jsonforms/material-renderers';
import { JsonForms } from '@jsonforms/react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FC, useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import ratingControlTester from '../ratingControlTester';
import schema from '../schema.json';
import RatingControl from './RatingControl';

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

const initialData = {
  name: 'Send email to Adrian',
  description: 'Confirm if you have passed the subject\nHereby ...',
  done: true,
  recurrence: 'Daily',
  rating: 3,
};

const renderers = [
  ...materialRenderers,
  //register custom renderers
  { tester: ratingControlTester, renderer: RatingControl },
  { tester: ratingControlTester, renderer: Form },
];

type Inputs = {
  name: string;
  description: string;
};

export const JsonFormsDemo: FC = () => {
  /* const [data, setData] = useState<object>(initialData); */
  /* const [errors, setErrors] = useState([]); */
  /*  const stringifiedData = useMemo(() => JSON.stringify(data, null, 2), [data]); */

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  const data = getValues();

  /* console.log('errors', errors); */

  /*   const clearData = () => {
    setData({});
  }; */

  /*   const validateActivity = useCallback(data => {
    switch (data.name) {
      case 'Send email to Peppe':
        setErrors([
          {
            instancePath: '/name',
            message: 'No Snow',
            schemaPath: '#/properties/name',
          },
        ]);
        break;
      default:
        setErrors([]);
    }
  }, []); */

  const middleware = useCallback((state, action, defaultReducer) => {
    const newState = defaultReducer(state, action);

    console.log(state);

    /*     console.log('old state', state);
    console.log('action', action);
    console.log('newState', newState); */

    /*
     * action contains the path of the updated value
     */
    switch (action.type) {
      case INIT:
      case UPDATE_DATA: {
        /* setData(newState.data); */
        /*   validateActivity(newState.data); */
        return state;
      }
      default:
        return newState;
    }
  }, []);

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
          <JsonForms
            schema={schema}
            data={data}
            renderers={renderers}
            validationMode="NoValidation"
            middleware={middleware}
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="test" {...register('name')} />

          {/* include validation with required or other standard HTML validation rules */}
          <input {...register('description', { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.description && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </Grid>
    </Grid>
  );
};

const Form = () => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register('name')} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register('description', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.description && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};
