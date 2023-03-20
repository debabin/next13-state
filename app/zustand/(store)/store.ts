import { create, createStore } from "zustand";

export const initServerStore = (state = 0) =>
  createStore((set: any) => ({
    value: state,
    increment: () => set((state: any) => ({ value: state.value + 1 })),
  }));

export const initClientStore = (state = 0) =>
  create((set: any) => ({
    value: state,
    increment: () => set((state: any) => ({ value: state.value + 1 })),
  }));

export const globalServerStore = initServerStore();
