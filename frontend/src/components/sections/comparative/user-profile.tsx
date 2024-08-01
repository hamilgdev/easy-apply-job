import { Avatar, AvatarFallback, AvatarImage, Separator } from '@/components';
import { UserProfile as IUserProfile } from '@/interfaces';

interface UserProfileProps {
  userProfile?: IUserProfile;
}

export const UserProfile = ({ userProfile }: UserProfileProps) => {
  return (
    <div className='bg-card'>
      <div className='flex items-center gap-4'>
        <Avatar className='h-16 w-16'>
          <AvatarImage
            src='/assets/placeholder-user.webp'
            className='size-20 
          object-contain pointer-events-none object-center'
          />
          <AvatarFallback>
            {userProfile?.username[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <h2 className='text-xl font-bold'>{userProfile?.username}</h2>
          <p className='text-muted-foreground'>{userProfile?.role}</p>
        </div>
      </div>
      <Separator className='my-4' />
      <p className='text-muted-foreground'>{userProfile?.description}</p>
    </div>
  );
};
