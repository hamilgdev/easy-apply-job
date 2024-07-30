import { errorHandler } from "@/handlers";
import { NotificationManager } from "@/lib/notifications";
import { getOfferAnalyzer } from "@/services/offer-analyzer";
import { offerAnalyzerStore } from "@/store";
import { HttpStatusCode } from "axios";
import { useCallback, useState } from "react";
import { useComparison } from "./use-comparison";

export function useOfferAnalyzer({
  onHandleStepNext,
  onHandleStepBack,
}: {
  onHandleStepNext: () => void;
  onHandleStepBack: () => void;
}) {
  const { handlePostComparison } = useComparison({ onHandleStepBack });

  const { setJobOffer } = offerAnalyzerStore()
  const [isLoading, setIsLoading] = useState(false);

  const handleGetOfferAnalyzer = useCallback(async ({ url }: { url: string }) => {
    if (!url) return
    setIsLoading(true);
    try {
      const params = { url };
      const response = await getOfferAnalyzer({ params });
      if (response.status === HttpStatusCode.Ok) {
        const { job_offer } = response.data;
        setJobOffer(job_offer);
        NotificationManager({
          type: 'success',
          message: '¡Todo bien! Revisando la oferta de trabajo.',
        });
        onHandleStepNext();
        handlePostComparison();
      }
    } catch (error) {
      errorHandler('¡Uy! Algo falló. ¿Puedes intentar de nuevo?');
    } finally {
      setIsLoading(false);
    }
  }, [setJobOffer, onHandleStepNext, handlePostComparison]);

  return { isLoading, handleGetOfferAnalyzer };
}