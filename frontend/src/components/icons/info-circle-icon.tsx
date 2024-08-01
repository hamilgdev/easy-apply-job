import { IconsProps } from '@/interfaces';

export const InfoCircleIcon = ({ size = 'md' }: IconsProps) => {
  const sm = size === 'sm' && 'size-4';
  const md = size === 'md' && 'size-6';
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`${sm || md}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0' />
      <path d='M12 9h.01' />
      <path d='M11 12h1v4h1' />
    </svg>
  );
};
