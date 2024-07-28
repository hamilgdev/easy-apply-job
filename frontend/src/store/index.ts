import { create } from "zustand";

interface UserInformationStore {
  userInformation: string;
  setUserInformation: (userInformation: string) => void;
}

export const userInformationStore = create<UserInformationStore>((set) => ({
  userInformation: '',
  setUserInformation: (userInformation: string) => set({ userInformation }),
}))