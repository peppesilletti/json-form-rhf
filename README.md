Overview:
- React Hook Form manages form inputs within steps, while Zustand stores validated data globally.
- Data flows from Zustand to React Hook Form when initializing steps, and from React Hook Form to Zustand only after validation on form submission.
- The useFormState hook allows components to read step state at any time, and this can be used to listen to state changes from other blocks
- The useWizardState hook allows components to read global state at any time, while maintaining strict write-access control through form submission (so we don't allow writing to global state from everywhere)
- Form validation acts as a quality control gate, ensuring only valid data enters the global state.
- Each step's form state is isolated and independent, preventing invalid data in one step from affecting others.#
