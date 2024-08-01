export const ComparativeListEmpty = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className='flex flex-col gap-1'>
      <article>
        <h3 className='text-base font-semibold text-gray-500 mb-2'>{title}</h3>
        <div className='flex gap-2 items-center text-green-500'>
          {icon}
          <p className='text-sm text-muted-foreground'>{description}</p>
        </div>
      </article>
    </div>
  );
};
