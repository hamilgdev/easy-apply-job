import { Avatar, AvatarFallback, AvatarImage, Separator } from '@/components';

export const UserProfile = () => {
  return (
    <div className='bg-card p-6 rounded-lg shadow-lg'>
      <div className='flex items-center gap-4'>
        <Avatar className='h-16 w-16'>
          <AvatarImage
            src='/assets/placeholder-user.webp'
            className='size-20 
          object-contain pointer-events-none object-center'
          />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <h2 className='text-xl font-bold'>John Doe</h2>
          <p className='text-muted-foreground'>Software Engineer</p>
        </div>
      </div>
      <Separator className='my-4' />
      <p className='text-muted-foreground'>
        Experienced software engineer with a passion for building innovative
        solutions. Skilled in full-stack development, problem-solving, and
        delivering high-quality projects.
      </p>
    </div>
  );
};
