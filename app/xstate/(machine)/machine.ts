import { createMachine } from "xstate";

export const initMachine = (state: "inactive" | "active" = "inactive") =>
  createMachine({
    initial: state,
    states: {
      inactive: { on: { TOGGLE: "active" } },
      active: { on: { TOGGLE: "inactive" } },
    },
  });

export const globalServerMachine = initMachine();
