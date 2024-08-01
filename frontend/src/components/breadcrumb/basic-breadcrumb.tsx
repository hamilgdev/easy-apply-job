import { ArrowIcon } from '@/components';
import { NAVIGATION_STEPS } from '@/constants/navigation-steps';
import { IconsProps } from '@/interfaces';
import { clsx } from 'clsx';

const BreadcrumbItem = ({
  title,
  icon,
  index,
  stepHitory,
  activeStep,
  onClick,
}: {
  title: string;
  icon: (props?: IconsProps) => JSX.Element;
  index: number;
  activeStep: number;
  stepHitory: number[];
  onClick: (index: number) => void;
}) => {
  return (
    <li key={index} className='flex items-center'>
      <div
        onClick={() => onClick(index)}
        className={clsx(
          'flex items-center',
          stepHitory.includes(index) ? 'text-gray-700' : 'text-gray-400'
        )}
      >
        {index > 0 && (
          <div className='mx-2'>
            <ArrowIcon size='sm' />
          </div>
        )}
        <div className='flex items-center gap-2'>
          <span
            className={clsx(
              'lg:hidden flex items-center justify-center p-1 size-7 rounded-full ring-4 ring-white',
              stepHitory.includes(index) ? 'bg-green-200' : 'bg-gray-100'
            )}
          >
            {icon()}
          </span>
          <span
            className={clsx(
              'hidden sm:inline-block text-sm font-medium',
              index < activeStep ? 'hover:text-green-600 cursor-pointer' : ''
            )}
          >
            {title}
          </span>
        </div>
      </div>
    </li>
  );
};

export const BasicBreadcrumb = ({
  stepHitory,
  activeStep,
  onHandleStepBack,
}: {
  activeStep: number;
  stepHitory: number[];
  onHandleStepBack: (backTo?: number) => void;
}) => {
  const handleStepBack = (index: number) => {
    if (index < activeStep) onHandleStepBack(index);
  };

  return (
    <nav
      className='flex w-fit px-5 py-3 border border-gray-200 rounded-lg bg-gray-50'
      aria-label='Breadcrumb'
    >
      <ol className='inline-flex items-center space-x-1 md:space-x-1 rtl:space-x-reverse'>
        {NAVIGATION_STEPS.map((item, index) => (
          <BreadcrumbItem
            key={index}
            index={index}
            activeStep={activeStep}
            stepHitory={stepHitory}
            onClick={handleStepBack}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </ol>
    </nav>
  );
};
