import { errorHandler } from "@/handlers";
import { useCallback, useState } from "react";
import { NotificationManager } from "@/lib/notifications";
import { postUploadFile } from "@/services/files-service";
import { HttpStatusCode } from "axios";
import { userInformationStore } from "@/store";

export function useUploadFile({
  onHandleStepNext
}: {
  onHandleStepNext: () => void;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const { setUserInformation } = userInformationStore();

  const handleUploadFile = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setIsLoading(true);
      const file = e.target.files[0];
      try {
        if (file) {
          const response = await postUploadFile(file);
          if (response.status === HttpStatusCode.Created) {
            const { user_information } = response.data;
            setUserInformation(user_information);
            NotificationManager({
              type: 'success',
              message: 'Has subido tu archivo correctamente',
            });
            onHandleStepNext();
          }
        }
      } catch (error) {
        errorHandler(error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [onHandleStepNext, setUserInformation]);

  return { isLoading, handleUploadFile };
}