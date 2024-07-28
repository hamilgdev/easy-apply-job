import { IconsProps } from '@/interfaces';

export const ArrowIcon = ({ size = 'md' }: IconsProps) => {
  const sm = size === 'sm' && 'size-3';
  const md = size === 'md' && 'size-6';
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      className={`${sm || md}`}
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      viewBox='0 0 6 10'
    >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='m1 9 4-4-4-4'
      />
    </svg>
  );
};
