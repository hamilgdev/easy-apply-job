import { errorHandler } from "@/handlers";
import { postComparison } from "@/services/comparison-service";
import { jobComparisonStore, offerAnalyzerStore, userInformationStore } from "@/store";
import { HttpStatusCode } from "axios";
import { useCallback, useEffect } from 'react';

export function useComparison({
  onHandleStepBack
}: {
  onHandleStepBack: () => void;
}) {
  const { userInformation } = userInformationStore();
  const { jobOffer } = offerAnalyzerStore();
  const { setJobComparison, setOnAirJobComparison } = jobComparisonStore();

  const handlePostComparison = useCallback(async () => {
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
  }, [jobOffer, userInformation, onHandleStepBack, setJobComparison, setOnAirJobComparison]);

  useEffect(() => {
    return () => {
      setOnAirJobComparison(true);
      setJobComparison(null);
    };
  }, [setOnAirJobComparison, setJobComparison]);

  return {
    handlePostComparison,
  };
}