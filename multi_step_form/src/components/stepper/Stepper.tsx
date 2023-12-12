import { useEffect, useState, useMemo } from "react";
import StepCircle from "./StepCircle";

type Stepper = {
  currentStepIndex: number;
  confirm: boolean;
};

type StepObject = {
  description: string;
  completed: boolean;
  highlighted: boolean;
  selected: boolean;
};

const Stepper = ({ currentStepIndex, confirm }: Stepper) => {
  const [newStep, setNewStep] = useState<StepObject[] | []>([]);
  const stepLabels = useMemo(
    () => ["Personal Details", "Address", "Account Details"],
    []
  );

  const updateStep = (
    stepNumber: number,
    steps: StepObject[]
  ): StepObject[] => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: false,
        };
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
      }

      count++;
    }

    return newSteps;
  };

  useEffect(() => {
    const stepsState = stepLabels.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    const current = updateStep(currentStepIndex, stepsState);
    setNewStep(current);
  }, [currentStepIndex, stepLabels]);

  return (
    <div className="mx-4 p-5 flex justify-between items-center">
      {newStep.map((step, index) => {
        return (
          <StepCircle
            key={index}
            index={index}
            step={step}
            setWidthFull={index !== newStep.length - 1}
            confirm={confirm}
          />
        );
      })}
    </div>
  );
};

export default Stepper;
