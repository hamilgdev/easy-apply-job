export const CardButton = ({
  text,
  icon,
  onClick,
}: {
  text: string;
  icon: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      className='inline-flex gap-1 items-center justify-center p-4 text-sm font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100'
      onClick={onClick}
    >
      {icon}
      <span className='w-full'>{text}</span>
      <svg
        className='w-4 h-4 ms-2 rtl:rotate-180'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 14 10'
      >
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M1 5h12m0 0L9 1m4 4L9 9'
        />
      </svg>
    </button>
  );
};
