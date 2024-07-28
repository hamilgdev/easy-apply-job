export interface FileUploadResponse {
  user_information: string;
}

export interface OfferAnalyzerResponse {
  job_offer: JobOffer;
}

export interface JobOffer {
  title: string;
  summary: string;
  description: string;
  image_url: string;
  provider_url: string;
}