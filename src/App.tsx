import { create } from 'zustand';
import './App.css';
import { Header } from './components/Header';
import { JsonFormsDemo } from './components/JsonFormsDemo';

interface JourneyState {
  form: {
    name: string;
    description: string;
  };

  form2: {
    username: string;
    petname: string;
  };
  setName: (name: string) => void;
  setDesription: (description: string) => void;
  setUsername: (username: string) => void;
  setPetname: (petname: string) => void;
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
  setName: name => set(state => ({ form: { ...state.form, name } })),
  setDesription: description =>
    set(state => ({ form: { ...state.form, description } })),
  setUsername: username =>
    set(state => ({ form2: { ...state.form2, username } })),
  setPetname: petname => set(state => ({ form2: { ...state.form2, petname } })),
}));

const App = () => {
  return (
    <>
      <Header />
      <JsonFormsDemo />
    </>
  );
};

export default App;
