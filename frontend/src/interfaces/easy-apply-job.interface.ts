export interface FileUploadResponse {
  user_information: string;
}

export interface OfferAnalyzerResponse {
  job_offer: JobOffer;
}

export interface ComparisonResponse {
  job_comparison: ComparisonJobOffer;
}

export interface ComparisonJobOffer {
  is_job_offer_adequate: boolean;
  user_profile: UserProfile;
  job_offer: JobOfferComparison;
  tips: Tips;
}

export interface JobOfferComparison {
  title: string;
  summary: string;
  description: string;
  key_responsibilities: string[];
  company_name: string;
  job_type: string;
  salary: string;
}

export interface Tips {
  profile: string;
  description: string;
  skills: string;
  experience: string;
  education: string;
}

export interface UserProfile {
  username: string;
  role: string;
  description: string;
  skills: string[];
}

export interface JobOffer {
  title: string;
  summary: string;
  description: string;
  image_url: string;
  provider_url: string;
}