import { NAVIGATION_STEPS } from '@/constants/navigation-steps';
import { clsx } from 'clsx';

const TimelineItem = ({
  title,
  description,
  icon,
  index,
  stepHitory,
}: {
  title: string;
  description: string;
  icon: () => JSX.Element;
  index: number;
  stepHitory: number[];
}) => {
  return (
    <li className='mb-10 ms-6 max-w-48'>
      <span
        className={clsx(
          'absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white',
          stepHitory.includes(index) ? 'bg-green-200' : 'bg-gray-100'
        )}
      >
        {icon()}
      </span>
      <h3 className='text-base font-medium leading-tight mb-1'>{title}</h3>
      <p className='text-xs text-balance'>{description}</p>
    </li>
  );
};

export const TimelineStepper = ({ stepHitory }: { stepHitory: number[] }) => {
  return (
    <ol className='relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400'>
      {NAVIGATION_STEPS.map((item, index) => (
        <TimelineItem
          key={index}
          index={index}
          stepHitory={stepHitory}
          {...item}
        />
      ))}
    </ol>
  );
};
