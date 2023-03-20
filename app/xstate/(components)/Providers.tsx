"use client";

import React from "react";

const XstateContext = React.createContext({});
export const useXstateContext = () => React.useContext(XstateContext);

export default function Providers({ children, state }: any) {
  return (
    <XstateContext.Provider value={state}>{children}</XstateContext.Provider>
  );
}
