type StepCircleProps = {
  index: number;
  setWidthFull: boolean;
  step: StepObject;
  confirm: boolean;
};

type StepObject = {
  description: string;
  completed: boolean;
  highlighted: boolean;
  selected: boolean;
};

const StepCircle = ({
  setWidthFull,
  index,
  step,
  confirm,
}: StepCircleProps) => {
  const { selected, highlighted, completed, description } = step;

  return (
    <div className={`${setWidthFull ? "w-full" : ""} flex items-center`}>
      <div className="relative flex flex-col items-center text-teal-600">
        <div
          className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 font-bold ${
            selected ? "bg-green-600 text-white border border-green-600" : ""
          }`}
        >
          {completed || confirm ? (
            <span className="text-white font-bold text-xl">&#10003;</span>
          ) : (
            index + 1
          )}
        </div>
        <div
          className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ${
            highlighted ? "text-gray-900" : "text-gray-400"
          } `}
        >
          {description}
        </div>
      </div>
      <div
        className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
          completed ? "border-green-600" : "border-gray-300"
        }`}
      ></div>
    </div>
  );
};

export default StepCircle;
