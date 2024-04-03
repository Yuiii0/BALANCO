import create from "zustand";

interface ModalState {
  isModalOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  open: () => set({ isModalOpen: true }),
  close: () => set({ isModalOpen: false }),
}));
