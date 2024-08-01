import { ComparisonJobOffer, JobOffer } from "@/interfaces";
import { create } from "zustand";

interface UserInformationStore {
  userInformation: string;
  setUserInformation: (userInformation: string) => void;
}

export const userInformationStore = create<UserInformationStore>((set) => ({
  userInformation: '',
  setUserInformation: (userInformation: string) => set({ userInformation }),
}))


interface OfferAnalyzerStore {
  jobOffer: JobOffer;
  setJobOffer: (jobOffer: any) => void;
}

export const offerAnalyzerStore = create<OfferAnalyzerStore>((set) => ({
  jobOffer: {
    title: '',
    summary: '',
    description: '',
    image_url: '',
    company_name: '',
    job_type: '',
    key_responsibilities: [],
    salary: '',
    provider_url: '',
  },
  setJobOffer: (jobOffer: JobOffer) => set({ jobOffer }),
}));


interface JobComparisonStore {
  jobComparison: ComparisonJobOffer | null;
  onAirJobComparison: boolean;
  setOnAirJobComparison: (onAirJobComparison: boolean) => void;
  setJobComparison: (jobComparison: any) => void;
}

export const jobComparisonStore = create<JobComparisonStore>((set) => ({
  jobComparison: null,
  onAirJobComparison: true,
  setOnAirJobComparison: (onAirJobComparison: boolean) => set({ onAirJobComparison }),
  setJobComparison: (jobComparison: ComparisonJobOffer) => set({ jobComparison }),
}));
