import { NotificationManager } from "@/lib/notifications";
import { AxiosError, HttpStatusCode } from "axios";

const isBadRequestError = (error: AxiosError) => {
  if (!error.response) return false;
  return error.response.status === HttpStatusCode.BadRequest;
};

const isInternalServerError = (error: AxiosError) => {
  if (!error.response) return false;
  return error.response.status === HttpStatusCode.InternalServerError;
};


const notificationManagerMessage = (message: string) => {
  NotificationManager({
    type: 'destructive',
    message,
  })
}

export const errorHandler = (error: any) => {
  const data = error?.response?.data || false;

  if (!data && typeof error === 'string') return notificationManagerMessage(error);

  if (isBadRequestError(error)) notificationManagerMessage(data.message);

  if (isInternalServerError(error)) notificationManagerMessage('Hubo un problema con su solicitud.');
}