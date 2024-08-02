import { errorHandler } from "@/handlers";
import { JobOfferAnalyzer } from "@/interfaces";
import { postComparison } from "@/services/comparison-service";
import { jobComparisonStore, userInformationStore } from "@/store";
import { HttpStatusCode } from "axios";
import { useCallback, useEffect } from 'react';
import { NotificationManager } from "@/lib/notifications";

export function useComparison({
  onHandleStepBack
}: {
  onHandleStepBack: () => void;
}) {
  const { userInformation } = userInformationStore();
  const { jobComparison, setJobComparison, setOnAirJobComparison } = jobComparisonStore();

  const handlePostComparison = useCallback(async (jobOffer: JobOfferAnalyzer) => {
    if (!jobOffer || !userInformation) return;
    try {
      const params = { job_offer: jobOffer, user_information: userInformation };
      const response = await postComparison({ params });
      if (response.status === HttpStatusCode.Created) {
        const { job_comparison } = response.data;
        setJobComparison(job_comparison);
        NotificationManager({
          type: 'success',
          message: '¡Hecho! Hemos comparado la oferta de trabajo con tu perfil.',
        });
      }
    } catch (error) {
      onHandleStepBack();
      errorHandler('¡Vaya! Parece que no pudimos comparar la oferta de trabajo con tu perfil. ¿Puedes intentar de nuevo?');
    } finally {
      setOnAirJobComparison(false);
    }
  }, [userInformation, onHandleStepBack, setJobComparison, setOnAirJobComparison]);

  useEffect(() => {
    return () => {
      if (jobComparison) {
        setJobComparison(null);
        setOnAirJobComparison(true);
      }
    }
  }, [jobComparison, setJobComparison, setOnAirJobComparison]);

  return {
    handlePostComparison,
  };
}