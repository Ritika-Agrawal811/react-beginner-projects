import { useState } from "react";
import Stepper from "./components/stepper/Stepper";
import StepperControl from "./components/StepperControl";
import Account from "./components/forms/Account";
import Address from "./components/forms/Address";
import Details from "./components/forms/Details";

import { useMultiStepForm } from "./hooks/useMultiStepForm";

function App() {
  const [confirm, setConfirm] = useState(false);
  const { steps, currentStepIndex, back, next, step } = useMultiStepForm([
    <Details />,
    <Address />,
    <Account />,
  ]);

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    next();
  };

  return (
    <main className="md:w-3/4 mx-auto shadow-xl rounded-2xl p-1 md:p-4 my-4 bg-white flex flex-col items-center">
      <section className="container horizontal mt-4">
        <Stepper currentStepIndex={currentStepIndex} confirm={confirm} />
      </section>
      <form className="w-full lg:w-3/4" onSubmit={formSubmitHandler}>
        {confirm ? "complete" : step}

        <StepperControl
          back={back}
          currentStepIndex={currentStepIndex}
          steps={steps}
          confirm={confirm}
          setConfirm={setConfirm}
        />
      </form>
    </main>
  );
}

export default App;
