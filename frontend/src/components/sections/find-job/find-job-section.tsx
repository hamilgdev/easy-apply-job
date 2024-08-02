import {
  CardButton,
  SearchJobAnalizerForm,
  InfoCircleIcon,
  FillJobDetailsForm,
} from '@/components';
import { useComparison } from '@/hooks/use-comparison';
import { useOfferAnalyzer } from '@/hooks/use-offer-analyzer';
import { useState } from 'react';

const FLOW_TYPES = {
  SEARCH_JOB: 0,
  FILL_JOB_DETAILS: 1,
} as const;

export const FindJobSection = ({
  onHandleStepNext,
  onHandleStepBack,
}: {
  onHandleStepNext: () => void;
  onHandleStepBack: () => void;
}) => {
  const { isLoading: isComparisonLoading, handlePostComparison } =
    useComparison({ onHandleStepBack });
  const { handleGetOfferAnalyzer, isLoading } = useOfferAnalyzer({
    onHandleStepNext,
    onHandleStepBack,
  });

  const [flowType, setFlowType] = useState<
    (typeof FLOW_TYPES)[keyof typeof FLOW_TYPES]
  >(FLOW_TYPES.SEARCH_JOB);

  const handleFillFields = () => setFlowType(FLOW_TYPES.FILL_JOB_DETAILS);
  const handleBackToSearchJob = () => setFlowType(FLOW_TYPES.SEARCH_JOB);

  const determiteTitle =
    flowType === FLOW_TYPES.SEARCH_JOB
      ? 'Encuentra tu oferta laboral'
      : 'Acerca de la oferta';
  const determiteDescription =
    flowType === FLOW_TYPES.SEARCH_JOB
      ? 'Ingrese la URL de la oferta y la analizaremos para darte la mejor recomendación'
      : 'Complete los campos a continuación para analizar la oferta';

  return (
    <section>
      <div className='flex justify-center items-center flex-col mb-2'>
        <h2 className='text-lg font-semibold text-gray-800'>
          {determiteTitle}
        </h2>
        <p className='text-sm text-gray-500 mb-4'>{determiteDescription}</p>
      </div>
      <div className='flex justify-center items-center flex-col gap-6'>
        {flowType === FLOW_TYPES.SEARCH_JOB && (
          <>
            <SearchJobAnalizerForm
              onSubmit={handleGetOfferAnalyzer}
              isLoading={isLoading}
            />
            <CardButton
              icon={<InfoCircleIcon />}
              text='¿Quieres proveer la información? Haz clic aquí.'
              onClick={handleFillFields}
            />
          </>
        )}

        {flowType === FLOW_TYPES.FILL_JOB_DETAILS && (
          <div className='w-full max-w-xl'>
            <FillJobDetailsForm
              isLoading={isComparisonLoading}
              onSubmit={handlePostComparison}
              onHandleStepNext={onHandleStepNext}
              onBackToSearchJob={handleBackToSearchJob}
            />
          </div>
        )}
      </div>
    </section>
  );
};
