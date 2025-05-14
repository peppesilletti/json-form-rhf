/* eslint-disable @typescript-eslint/ban-ts-comment */
import { UISchemaElement } from '@jsonforms/core';
import { z } from 'zod';
import { create } from 'zustand';
import './App.css';
import { Header } from './components/Header';
import { Step } from './components/Step';
import uischema from './components/uischema.json';
import uischema2 from './components/uischema2.json';
import uischema3 from './components/uischema3.json';
interface JourneyState {
  form: {
    name: string;
    description: string;
  };

  form2: {
    username: string;
    petname: string;
  };
  form3: {
    age: string;
  };
  form4: {
    city: string;
  };
  custom: {
    custom: string;
  };
  setName: (name: string) => void;
  setDesription: (description: string) => void;
  setUsername: (username: string) => void;
  setPetname: (petname: string) => void;
  setAge: (age: string) => void;
  setCity: (city: string) => void;
  currentStep: number;
  prevStep: () => void;
  nextStep: () => void;
}

export const useJourneyStore = create<JourneyState>(set => ({
  form: {
    name: '',
    description: '',
  },
  form2: {
    petname: '',
    username: '',
  },
  form3: {
    age: '0',
  },
  form4: {
    city: '',
  },
  custom: {
    custom: '',
  },
  setName: name => set(state => ({ form: { ...state.form, name } })),
  setDesription: description =>
    set(state => ({ form: { ...state.form, description } })),
  setUsername: username =>
    set(state => ({ form2: { ...state.form2, username } })),
  setPetname: petname => set(state => ({ form2: { ...state.form2, petname } })),
  setAge: age => set(state => ({ form3: { ...state.form3, age } })),
  setCity: city => set(state => ({ form4: { ...state.form4, city } })),
  currentStep: 0,
  prevStep: () => set(state => ({ currentStep: state.currentStep - 1 })),
  nextStep: () => set(state => ({ currentStep: state.currentStep + 1 })),
}));

const steps: {
  id: string;
  schema: z.ZodSchema;
  uischema: UISchemaElement;
}[] = [
  {
    id: 'step1',
    schema: z.object({
      form: z.object({
        name: z.string().min(1, { message: 'Required' }),
        description: z.string().min(1, { message: 'Required' }),
      }),
      form2: z.object({
        username: z.string().optional(),
        petname: z.string().optional(),
      }),
    }),
    uischema,
  },
  {
    id: 'step2',
    schema: z.object({
      form3: z.object({
        age: z.string().min(1, { message: 'Required' }),
      }),
      form4: z.object({
        city: z.string().optional(),
      }),
      custom: z.object({
        custom: z.string().optional(),
      }),
    }),
    uischema: uischema2,
  },
  {
    id: 'step3',
    schema: z.object({}),
    uischema: uischema3,
  },
];

const App = () => {
  const journeyStore = useJourneyStore();
  const currentStep = steps[journeyStore.currentStep];

  let defaultValues = {};

  if (currentStep.id === 'step1') {
    defaultValues = {
      form: journeyStore.form,
      form2: journeyStore.form2,
    };
  } else if (currentStep.id === 'step2') {
    defaultValues = {
      form3: journeyStore.form3,
      form4: journeyStore.form4,
      custom: journeyStore.custom,
    };
  }

  return (
    <>
      <Header />

      <Step
        key={currentStep.id} // important to re-render the step, and so the react hook form instance
        id={currentStep.id}
        defaultValues={defaultValues}
        schema={currentStep.schema}
        uischema={currentStep.uischema}
        onSubmit={data => {
          if (currentStep.id === 'step2') {
            // @ts-expect-error
            journeyStore.setAge(data.form3.age ?? '');
            // @ts-expect-error
            journeyStore.setCity(data.form4.city ?? '');

            journeyStore.nextStep();
          }

          if (currentStep.id === 'step1') {
            // @ts-expect-error
            journeyStore.setName(data.form.name);
            // @ts-expect-error
            journeyStore.setDesription(data.form.description);
            // @ts-expect-error
            journeyStore.setUsername(data.form2.username);
            // @ts-expect-error
            journeyStore.setPetname(data.form2.petname);
            journeyStore.nextStep();
          }
        }}
        prevStep={() => {
          journeyStore.prevStep();
        }}
      />

      <div>
        <pre id="boundData">{JSON.stringify(journeyStore, null, 2)}</pre>
      </div>
    </>
  );
};

export default App;
