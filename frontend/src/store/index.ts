import { JobOffer } from "@/interfaces";
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
    provider_url: '',
  },
  setJobOffer: (jobOffer: JobOffer) => set({ jobOffer }),
}));