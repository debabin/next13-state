"use client";

import React from "react";
import { initStore } from "../(store)/store";

const EffectorContext = React.createContext({});
export const useEffectorContext = () => React.useContext(EffectorContext);

export default function Providers({ children, state }: any) {
  const $counter = initStore(state);

  return (
    <EffectorContext.Provider value={{ $counter }}>
      {children}
    </EffectorContext.Provider>
  );
}
