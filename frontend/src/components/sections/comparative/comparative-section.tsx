import { AITips } from './ai-tips';
import { JobOffer } from './job-offer';
import { UserProfile } from './user-profile';

export const ComparativeSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-4'>
        <UserProfile />
        <JobOffer />
      </div>

      <div className=''>
        <AITips />
      </div>
    </section>
  );
};
