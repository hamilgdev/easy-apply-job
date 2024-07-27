import { IconsProps } from '@/interfaces';

export const UserScanIcon = ({ size = 'md' }: IconsProps) => {
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
      <path d='M10 9a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
      <path d='M4 8v-2a2 2 0 0 1 2 -2h2' />
      <path d='M4 16v2a2 2 0 0 0 2 2h2' />
      <path d='M16 4h2a2 2 0 0 1 2 2v2' />
      <path d='M16 20h2a2 2 0 0 0 2 -2v-2' />
      <path d='M8 16a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2' />
    </svg>
  );
};
