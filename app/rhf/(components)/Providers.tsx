"use client";

import React from "react";

const ReactHookFormContext = React.createContext({});
export const useReactHookFormContext = () =>
  React.useContext(ReactHookFormContext);

export default function Providers({ children, state }: any) {
  return (
    <ReactHookFormContext.Provider value={state}>
      {children}
    </ReactHookFormContext.Provider>
  );
}
