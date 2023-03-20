import { configureStore } from "@reduxjs/toolkit";
import { counterReducer, prefix as counterPrefix } from "./repos/slice";

export const initStore = (initialState?: any) => {
  return configureStore({
    reducer: {
      [counterPrefix]: counterReducer,
    },
    ...(initialState && { preloadedState: initialState }),
  });
};

export const globalServerStore = initStore();
