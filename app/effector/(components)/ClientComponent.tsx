"use client";

import { useStore } from "effector-react";
import { initStore, plus } from "../(store)/store";
import { useEffectorContext } from "./Providers";

const $counter = initStore();

export default function ClientComponent() {
  const { $counter: $preloadCounter } = useEffectorContext() as any;
  const preloadValue = useStore($preloadCounter) as any;
  const value = useStore($counter);

  return (
    <>
      <h3>preload client effector</h3>
      <div>count = {preloadValue}</div>
      <button onClick={() => plus()}>inc</button>

      <h3>client effector</h3>
      <div>count = {value}</div>
      <button onClick={() => plus()}>inc</button>
    </>
  );
}
