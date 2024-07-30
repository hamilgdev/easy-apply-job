import { ComparisonResponse, JobOffer } from "@/interfaces";
import easyApplyJobApi from "@/services/api/easy-apply-job-api";
import { AxiosResponse } from "axios";

interface PostComparisonParams {
  job_offer: JobOffer;
  user_information: string;
}

export async function postComparison({ params }: { params: PostComparisonParams }): Promise<AxiosResponse<ComparisonResponse>> {
  const url = '/comparison';
  const payload = { ...params };

  return await easyApplyJobApi.post(url, payload);
}