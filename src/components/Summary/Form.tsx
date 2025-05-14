import { useWizardState } from '../form_hooks';

const Summary = () => {
  const wizardState = useWizardState();

  return (
    <div>
      <h1>Summary</h1>
      <pre>{JSON.stringify(wizardState, null, 2)}</pre>
    </div>
  );
};

export default Summary;
