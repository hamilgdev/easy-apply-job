import { IconsProps } from '@/interfaces';

export const ReloadIcon = ({ size = 'md', className }: IconsProps) => {
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
      className={`${sm || md} ${className}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747' />
      <path d='M20 4v5h-5' />
    </svg>
  );
};
