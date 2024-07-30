'use client';

import { AITips } from './ai-tips';
import { JobOffer } from './job-offer';
import { UserProfile } from './user-profile';
import { CircleLoader } from '@/components';
import { jobComparisonStore } from '@/store';

export const ComparativeSection = () => {
  const { jobComparison, onAirJobComparison } = jobComparisonStore();

  if (onAirJobComparison)
    return (
      <div className='flex justify-center items-center flex-col gap-2'>
        <p className='text-gray-500 text-center text-base mb-4'>
          ¡Estamos en ello! Analizando la oferta laboral y tu perfil, por favor
          espera un momento...
        </p>
        <CircleLoader />
      </div>
    );

  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-4'>
        <UserProfile userProfile={jobComparison?.user_profile} />
        <JobOffer jobOffer={jobComparison?.job_offer} />
      </div>

      <div className=''>
        <AITips
          tips={jobComparison?.tips}
          isJobOfferAdequate={jobComparison?.is_job_offer_adequate}
        />
      </div>
    </section>
  );
};
