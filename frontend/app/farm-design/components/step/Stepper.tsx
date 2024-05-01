import Step from "./Step";
import StepName from "./StepName";

const Stepper = () => {
  return (
    <div className="flex h-[80%] gap-5 border justify-center bg-red-100">
      <div className="flex flex-col items-center ">
        <Step stepNumber={1} isActive={true} isFirst={true} />
        <Step stepNumber={2} isActive={true} />
        <Step stepNumber={3} isActive={true} />
        <Step stepNumber={4} isActive={false} />
      </div>
      <div className="flex flex-col items-center">
        <StepName stepNumber={1} title="Step" isActive={true} isFirst={true} />
        <StepName stepNumber={2} title="Step" isActive={true} />
        <StepName stepNumber={3} title="Step" isActive={true} />
        <StepName stepNumber={4} title="Step" isActive={false} />
      </div>
    </div>
  );
};

export default Stepper;
