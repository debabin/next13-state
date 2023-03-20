"use client";

import React from "react";
import { Counter } from "../(store)/counter";

const MobxContext = React.createContext({});
export const useMobxContext = () => React.useContext(MobxContext);

export default function Providers({ children, state }: any) {
  const clientCounter = new Counter(state);

  return (
    <MobxContext.Provider value={{ clientCounter }}>
      {children}
    </MobxContext.Provider>
  );
}
