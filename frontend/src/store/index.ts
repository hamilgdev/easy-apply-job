import { ComparisonJobOffer, JobOfferAnalyzer } from "@/interfaces";
import { create } from "zustand";

interface UserInformationStore {
  userInformation: string | null;
  setUserInformation: (userInformation: string) => void;
}

export const userInformationStore = create<UserInformationStore>((set) => ({
  userInformation: null,
  setUserInformation: (userInformation: string | null) => set({ userInformation }),
}))

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
