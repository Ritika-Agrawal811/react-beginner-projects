import { ReactElement } from "react";

type StepperControlProps = {
  back: () => void;
  currentStepIndex: number;
  steps: ReactElement[];
  confirm: boolean;
  setConfirm: (val: boolean) => void;
};

const StepperControl = ({
  back,
  currentStepIndex,
  steps,
  confirm,
  setConfirm,
}: StepperControlProps) => {
  const formCompleteHandler = () => {
    if (currentStepIndex === steps.length - 1) {
      setConfirm(true);
    }
  };

  const goBackHandler = () => {
    if (!confirm) {
      back();
    }

    setConfirm(false);
  };

  return (
    <section className="container flex justify-around my-4">
      <button
        type="button"
        onClick={goBackHandler}
        className={`bg-white text-slate-400 uppercase py-2 px-8 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${
          currentStepIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Back
      </button>
      <button
        type="submit"
        className="bg-green-500 text-white uppercase py-2 px-8 rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
        onClick={formCompleteHandler}
      >
        {currentStepIndex === steps.length - 1 ? "Confirm" : "Next"}
      </button>
    </section>
  );
};

export default StepperControl;
