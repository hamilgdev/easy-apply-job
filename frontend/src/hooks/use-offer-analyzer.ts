import { errorHandler } from "@/handlers";
import { getOfferAnalyzer } from "@/services/offer-analyzer";
import { HttpStatusCode } from "axios";
import { useCallback, useState } from 'react';
import { useComparison } from "./use-comparison";

export function useOfferAnalyzer({
  onHandleStepNext,
  onHandleStepBack,
}: {
  onHandleStepNext: () => void;
  onHandleStepBack: () => void;
}) {
  const { handlePostComparison } = useComparison({ onHandleStepBack });
  const [isLoading, setIsLoading] = useState(false);

  const handleGetOfferAnalyzer = useCallback(async ({ url }: { url: string }) => {
    if (!url) return
    setIsLoading(true);
    try {
      const params = { url };
      const response = await getOfferAnalyzer({ params });
      if (response.status === HttpStatusCode.Ok) {
        const { job_offer } = response.data;
        onHandleStepNext();
        await handlePostComparison(job_offer)
      }
    } catch (error) {
      errorHandler('¡Uy! Algo falló. Parece que no pudimos analizar la oferta. ¿Puedes intentar de nuevo?');
    } finally {
      setIsLoading(false);
    }
  }, [handlePostComparison, onHandleStepNext]);

  return { isLoading, handleGetOfferAnalyzer };
}