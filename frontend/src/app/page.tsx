'use client';

import { useState } from 'react';

import {
  BasicBreadcrumb,
  ComparativeSection,
  FindJobSection,
  StepperPanel,
  TimelineStepper,
  UploadCVSection,
} from '@/components';

export default function Home() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [stepHitory, setStepHitory] = useState<number[]>([0]);

  const handleStepNext = () => {
    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
    setStepHitory([...stepHitory, nextStep]);
  };

  const handleStepBack = (backTo?: number) => {
    const backStep = backTo ?? activeStep - 1;
    setActiveStep(backStep);
    setStepHitory(stepHitory.filter((step) => step <= backStep));
  };

  return (
    <>
      <header className='py-3 bg-background border-b flex items-center justify-between'>
        <div className='l-container'>
          <h1 className='text-base font-extrabold text-gray-500 text-center'>
            🧳 EASY APPLY JOB
          </h1>
        </div>
      </header>

      <main className='relative l-container flex flex-row py-12 gap-8'>
        <aside className='hidden sticky h-fit top-12 lg:block'>
          <TimelineStepper stepHitory={stepHitory} />
        </aside>

        <div className='flex gap-4 flex-col flex-1'>
          <div className='sticky top-0 bg-gray-50 p-2 z-10 lg:relative lg:p-0'>
            <BasicBreadcrumb
              activeStep={activeStep}
              onHandleStepBack={handleStepBack}
              stepHitory={stepHitory}
            />
          </div>
          <div className='p-8 bg-white rounded-lg shadow-lg'>
            <StepperPanel activeStep={activeStep} index={0}>
              <UploadCVSection onHandleStepNext={handleStepNext} />
            </StepperPanel>
            <StepperPanel activeStep={activeStep} index={1}>
              <FindJobSection
                onHandleStepBack={handleStepBack}
                onHandleStepNext={handleStepNext}
              />
            </StepperPanel>
            <StepperPanel activeStep={activeStep} index={2}>
              <ComparativeSection />
            </StepperPanel>
          </div>
        </div>
      </main>
    </>
  );
}
