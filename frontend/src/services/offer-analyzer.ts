import { OfferAnalyzerResponse } from "@/interfaces";
import { AxiosResponse } from "axios";
import easyApplyJobApi from "./api/easy-apply-job-api";

export async function getOfferAnalyzer({
  params,
}: {
  params: { url: string };
}): Promise<AxiosResponse<OfferAnalyzerResponse>> {
  const url = '/offer-analyzer';
  const payload = { params };
  return await easyApplyJobApi.get(url, payload);
}