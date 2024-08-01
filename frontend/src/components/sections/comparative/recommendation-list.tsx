import { CircleCheckIcon, ReportIcon, Separator } from '@/components';
import { AdviceItem } from '@/interfaces';
import { ComparativeListEmpty } from './comparative-empty';

export const RecommendationList = ({
  recommendations = [],
}: {
  recommendations?: AdviceItem[] | [];
}) => {
  const isRecommendationEmpty = recommendations.length === 0;

  return (
    <div className='bg-card p-6 rounded-lg shadow-lg col-span-1 md:col-span-3'>
      <h2 className='flex gap-2 justify-center items-center text-2xl font-bold mb-5 text-gray-500'>
        <ReportIcon />
        Recomendaciones para tu perfil
      </h2>
      <Separator className='my-4' />

      <div className='flex flex-col gap-1'>
        {isRecommendationEmpty && (
          <ComparativeListEmpty
            title='🎉 ¡YuJu! No tenemos recomendaciones para darte'
            description='¡Tu perfil esta genial! Sigue así.'
            icon={<CircleCheckIcon size='md' />}
          />
        )}

        {!isRecommendationEmpty &&
          recommendations.map((recommendation, index) => (
            <article key={index} className='mb-4'>
              <div className='flex gap-2 items-center text-green-500 mb-2'>
                <CircleCheckIcon size='md' />
                <h3 className='text-base font-semibold text-gray-500'>
                  {recommendation.title}
                </h3>
              </div>
              <p className='text-sm text-muted-foreground'>
                {recommendation.description}
              </p>
            </article>
          ))}
      </div>
    </div>
  );
};
