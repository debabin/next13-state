"use client";
import { Provider } from "react-redux";
import { initStore } from "../(store)/store";

export default function Providers({ children, state }: any) {
  const clientStore = initStore(state);
  return <Provider store={clientStore}>{children}</Provider>;
}
