import { create } from "zustand";

type AuthState = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  isAuthInitialized: boolean;
  setIsAuthInitialized: (isInitialized: boolean) => void;
  email: string;
  setEmail: (email: string) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => set(() => ({ isLoggedIn })),
  isAuthInitialized: false,
  setIsAuthInitialized: (isAuthInitialized) =>
    set(() => ({ isAuthInitialized })),
  email: "",
  setEmail: (email) => set(() => ({ email })),
}));
