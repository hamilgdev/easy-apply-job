import { BulbIcon, CircleCheckIcon, RocketIcon, Separator } from '@/components';
import { AdviceItem, Tips as ITips } from '@/interfaces';
import { ComparativeListEmpty } from './comparative-empty';

interface ITipsProps {
  isJobOfferAdequate?: boolean;
  tips?: ITips;
}

const AdviceList = ({ tip }: { tip: AdviceItem }) => {
  return (
    <>
      <li className='mb-4'>
        <h4 className='inline text-sm font-semibold text-gray-500'>
          {tip.title}
        </h4>
        <div className='flex gap-2 justify-start items-start text-orange-500 mt-1'>
          <div>
            <BulbIcon size='md' />
          </div>
          <p className='text-sm text-muted-foreground'>{tip.description}</p>
        </div>
      </li>
    </>
  );
};

export const Tips = ({ isJobOfferAdequate, tips }: ITipsProps) => {
  const isTipsEmpty = !tips || !Object.keys(tips).length;

  const hasProfileTips = !isTipsEmpty && tips?.profile.length > 0;
  const hasDescriptionTips = !isTipsEmpty && tips?.description.length > 0;
  const hasSkillsTips = !isTipsEmpty && tips?.skills.length > 0;
  const hasExperienceTips = !isTipsEmpty && tips?.experience.length > 0;
  const hasEducationTips = !isTipsEmpty && tips?.education.length > 0;

  const hasNoTips =
    !hasProfileTips &&
    !hasDescriptionTips &&
    !hasSkillsTips &&
    !hasExperienceTips &&
    !hasEducationTips;

  return (
    <div className='bg-card p-6 rounded-lg shadow-md'>
      <h2 className='flex gap-2 justify-center items-center text-2xl font-bold mb-5 text-gray-500'>
        <RocketIcon />
        Tips para mejorar tu CV
      </h2>
      <Separator className='my-4' />

      <div className='flex flex-col gap-1'>
        {hasNoTips && (
          <ComparativeListEmpty
            title='🎉 ¡YuJu! No tenemos tips para darte'
            description='¡Tu CV esta rock and roll! Sigue así.'
            icon={<CircleCheckIcon size='md' />}
          />
        )}

        {!hasNoTips && (
          <ul className='space-y-4 text-gray-500 list-disc list-inside'>
            {hasProfileTips && (
              <li>
                <h3 className='inline-block text-lg font-semibold text-gray-500 mb-0'>
                  Mejora tu perfil
                </h3>
                <ol className='ps-5 mt-2 space-y-1 list-decimal list-inside'>
                  {tips.profile.map((tip, index) => (
                    <AdviceList key={index} tip={tip} />
                  ))}
                </ol>
              </li>
            )}

            {hasDescriptionTips && (
              <li>
                <h3 className='inline-block text-lg font-semibold text-gray-500 mb-0'>
                  Acerca de tu descripción
                </h3>
                <ol className='ps-5 mt-2 space-y-1 list-decimal list-inside'>
                  {tips.description.map((tip, index) => (
                    <AdviceList key={index} tip={tip} />
                  ))}
                </ol>
              </li>
            )}

            {hasSkillsTips && (
              <li>
                <h3 className='inline-block text-lg font-semibold text-gray-500 mb-0'>
                  Sobre tus habilidades
                </h3>
                <ol className='ps-5 mt-2 space-y-1 list-decimal list-inside'>
                  {tips.skills.map((tip, index) => (
                    <AdviceList key={index} tip={tip} />
                  ))}
                </ol>
              </li>
            )}

            {hasExperienceTips && (
              <li>
                <h3 className='inline-block text-lg font-semibold text-gray-500 mb-0'>
                  Tu experiencia
                </h3>
                <ol className='ps-5 mt-2 space-y-1 list-decimal list-inside'>
                  {tips.experience.map((tip, index) => (
                    <AdviceList key={index} tip={tip} />
                  ))}
                </ol>
              </li>
            )}

            {hasEducationTips && (
              <li>
                <h3 className='inline-block text-lg font-semibold text-gray-500 mb-0'>
                  Sobre tu educación
                </h3>
                <ol className='ps-5 mt-2 space-y-1 list-decimal list-inside'>
                  {tips.education.map((tip, index) => (
                    <AdviceList key={index} tip={tip} />
                  ))}
                </ol>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};
