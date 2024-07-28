interface StepperPanelProps {
  activeStep: number;
  children: React.ReactNode;
  index: number;
}

export const StepperPanel = ({
  activeStep,
  children,
  index,
}: StepperPanelProps) => {
  return (
    <div
      role='steppanel'
      aria-labelledby={`step-${index}`}
      id={`steppanel-${index}`}
      hidden={activeStep !== index}
    >
      {activeStep === index && children}
    </div>
  );
};
