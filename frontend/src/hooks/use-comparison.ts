import { errorHandler } from "@/handlers";
import { JobOfferAnalyzer } from "@/interfaces";
import { postComparison } from "@/services/comparison-service";
import { jobComparisonStore, userInformationStore } from "@/store";
import { HttpStatusCode } from "axios";
import { useCallback } from 'react';

export function useComparison({
  onHandleStepBack
}: {
  onHandleStepBack: () => void;
}) {
  const { userInformation } = userInformationStore();
  const { setJobComparison, setOnAirJobComparison } = jobComparisonStore();

  const handlePostComparison = useCallback(async (jobOffer: JobOfferAnalyzer) => {
    if (!jobOffer || !userInformation) return;
    try {
      const params = { job_offer: jobOffer, user_information: userInformation };
      const response = await postComparison({ params });
      if (response.status === HttpStatusCode.Created) {
        const { job_comparison } = response.data;
        setJobComparison(job_comparison);
      }
    } catch (error) {
      errorHandler('¡Uy! Algo falló. ¿Puedes intentar de nuevo?');
      onHandleStepBack();
    } finally {
      setOnAirJobComparison(false);
    }
  }, [userInformation, onHandleStepBack, setJobComparison, setOnAirJobComparison]);

  return {
    handlePostComparison,
  };
}