'use client';

import { Tips } from './tips';
import { ImprovementList } from './improvement-list';
import { JobOffer } from './job-offer';
import { RecommendationList } from './recommendation-list';
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
      <div className='flex gap-4 flex-col mb-8'>
        <UserProfile userProfile={jobComparison?.user_profile} />
        <JobOffer jobOffer={jobComparison?.job_offer} />
      </div>
      <div className='flex gap-4 flex-col'>
        <RecommendationList recommendations={jobComparison?.recommendations} />
        <ImprovementList improvements={jobComparison?.improvements} />
        <Tips
          tips={jobComparison?.tips}
          isJobOfferAdequate={jobComparison?.is_job_offer_adequate}
        />
      </div>
    </section>
  );
};
