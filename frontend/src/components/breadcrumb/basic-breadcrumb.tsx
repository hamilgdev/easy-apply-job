import { ArrowIcon } from '@/components';
import { clsx } from 'clsx';

const DATA_BREADCRUMB = [
  {
    title: 'Sube tu CV',
  },
  {
    title: 'Encuentra tu oferta',
  },
  {
    title: 'Tips',
  },
];

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
      <ol className='inline-flex items-center space-x-2 md:space-x-2 rtl:space-x-reverse'>
        {DATA_BREADCRUMB.map((item, index) => (
          <li key={index} className='flex items-center'>
            <div
              onClick={() => handleStepBack(index)}
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
              <span
                className={clsx(
                  'rtl:ms-1 ltr:ms-1 text-sm font-medium  md:ms-2',
                  index < activeStep
                    ? 'hover:text-green-600 cursor-pointer'
                    : ''
                )}
              >
                {item.title}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};
