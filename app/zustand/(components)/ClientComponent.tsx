"use client";

import { initClientStore } from "../(store)/store";
import { useZustandContext } from "./Providers";

const useCounterStore = initClientStore();

export default function ClientComponent() {
  const { useCounterStore: usePreloadCounterStore } =
    useZustandContext() as any;
  const preloadValue = usePreloadCounterStore((state: any) => state.value);
  const preloadIincrement = usePreloadCounterStore(
    (state: any) => state.increment
  );

  const value = useCounterStore((state: any) => state.value);
  const increment = useCounterStore((state: any) => state.increment);

  return (
    <>
      <h3>preload client zustand</h3>
      <div>count = {preloadValue}</div>
      <button onClick={() => preloadIincrement()}>inc</button>

      <h3>client zustand</h3>
      <div>count = {value}</div>
      <button onClick={() => increment()}>inc</button>
    </>
  );
}
