import { BriefcaseIcon, UserScanIcon, SparklesIcon } from '@/components';

export const TimelineStepper = () => {
  return (
    <ol className='relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400'>
      <li className='mb-10 ms-6 max-w-48'>
        <span className='absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900'>
          <UserScanIcon />
        </span>
        <h3 className='text-base font-medium leading-tight mb-1'>Sube tu CV</h3>
        <p className='text-xs text-balance'>
          Dejanos saber de tus habilidades y experiencias
        </p>
      </li>
      <li className='mb-10 ms-6 max-w-48'>
        <span className='absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700'>
          <BriefcaseIcon />
        </span>
        <h3 className='text-base font-medium leading-tight mb-1'>
          Encuentra tu oferta
        </h3>
        <p className='text-xs text-balance'>Oferta a la que quieres aplicar</p>
      </li>
      <li className='mb-10 ms-6 max-w-48'>
        <span className='absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700'>
          <SparklesIcon />
        </span>
        <h3 className='text-base font-medium leading-tight mb-1'>Tips</h3>
        <p className='text-xs text-balance'>
          Recibe tips para mejorar tu perfil y aplicar a la oferta
        </p>
      </li>
    </ol>
  );
};
