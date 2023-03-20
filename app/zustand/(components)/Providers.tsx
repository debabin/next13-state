"use client";

import React from "react";
import { initClientStore } from "../(store)/store";

const ZustandContext = React.createContext({});
export const useZustandContext = () => React.useContext(ZustandContext);

export default function Providers({ children, state }: any) {
  const useCounterStore = initClientStore(state);

  return (
    <ZustandContext.Provider value={{ useCounterStore }}>
      {children}
    </ZustandContext.Provider>
  );
}
