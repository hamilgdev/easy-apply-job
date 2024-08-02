export interface FileUploadResponse {
  user_information: string;
}

export interface OfferAnalyzerResponse {
  job_offer: JobOfferAnalyzer;
}

export interface ComparisonResponse {
  job_comparison: ComparisonJobOffer;
}


export interface ComparisonJobOffer {
  is_job_offer_adequate: boolean;
  user_profile: UserProfile;
  job_offer: JobOfferComparison;
  recommendations: AdviceItem[] | [];
  improvements: AdviceItem[] | [];
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
  profile: AdviceItem[] | [];
  description: AdviceItem[] | [];
  skills: AdviceItem[] | [];
  experience: AdviceItem[] | [];
  education: AdviceItem[] | [];
}

export interface AdviceItem {
  title: string;
  description: string;
}

export interface UserProfile {
  username: string;
  role: string;
  description: string;
  skills: string[];
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

export interface JobOfferAnalyzer {
  title: string;
  summary: string;
  description: string;
  image_url?: string;
  provider_url?: string;
}