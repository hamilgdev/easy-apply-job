import { errorHandler } from "@/handlers";
import { NotificationManager } from "@/lib/notifications";
import { getOfferAnalyzer } from "@/services/offer-analyzer";
import { offerAnalyzerStore } from "@/store";
import { HttpStatusCode } from "axios";
import { useCallback, useState } from "react";

export function useOfferAnalyzer({
  onHandleStepNext
}: {
  onHandleStepNext: () => void;
}) {
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
          message: 'Se ha analizado la oferta correctamente',
        });
        onHandleStepNext();
      }
    } catch (error) {
      errorHandler(error);
    } finally {
      setIsLoading(false);
    }
  }, [setJobOffer, onHandleStepNext]);

  return { isLoading, handleGetOfferAnalyzer };
}