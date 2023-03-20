import { createEvent, createStore } from "effector";

export const plus = createEvent();

export const initStore = (state = 0) =>
  createStore(state).on(plus, (n) => n + 1);

export const $globalServerStore = initStore();
