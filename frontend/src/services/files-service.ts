import { FileUploadResponse } from "@/interfaces";
import easyApplyJobApi from "@/services/api/easy-apply-job-api";
import { AxiosResponse } from "axios";

export async function postUploadFile(file: File): Promise<AxiosResponse<FileUploadResponse>> {
  const url = '/files/upload';
  const formData = new FormData();
  formData.append('file', file);
  const headers = {
    'Content-Type': 'multipart/form-data',
  };

  return await easyApplyJobApi.post(url, formData, { headers });
}