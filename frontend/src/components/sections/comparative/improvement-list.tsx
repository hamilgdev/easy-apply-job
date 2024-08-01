import {
  CircleCheckIcon,
  InfoCircleIcon,
  Separator,
  SpeakerphoneIcon,
} from '@/components';
import { AdviceItem } from '@/interfaces';
import { ComparativeListEmpty } from './comparative-empty';

export const ImprovementList = ({
  improvements = [],
}: {
  improvements?: AdviceItem[] | [];
}) => {
  const isImprovementEmpty = improvements.length === 0;

  return (
    <div className='bg-card p-6 rounded-lg shadow-md'>
      <h2 className='flex gap-2 justify-center items-center text-2xl font-bold mb-5 text-gray-500'>
        <SpeakerphoneIcon />
        Mejora tus habilidades
      </h2>
      <Separator className='my-4' />

      <div className='flex flex-col gap-1'>
        {isImprovementEmpty && (
          <ComparativeListEmpty
            title='🎉 ¡YuJu! No tenemos mejoras para darte'
            description='¡Tus habilidades son excepcionales! Sigue mejorando.'
            icon={<CircleCheckIcon size='md' />}
          />
        )}

        {!isImprovementEmpty &&
          improvements.map((recommendation, index) => (
            <article key={index} className='mb-4'>
              <div className='flex gap-2 items-center text-red-500 mb-2'>
                <InfoCircleIcon size='md' />
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
