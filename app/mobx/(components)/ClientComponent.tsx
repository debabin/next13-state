"use client";

import { observer } from "mobx-react-lite";
import { useMobxContext } from "./Providers";
import { Counter } from "../(store)/counter";

const clientCounter = new Counter(0);

function ClientComponent() {
  const { clientCounter: prealoadClientCounter } = useMobxContext() as any;

  return (
    <>
      <h3>preload client mobx</h3>
      <div>count = {prealoadClientCounter.value}</div>
      <button onClick={() => prealoadClientCounter.increment()}>inc</button>

      <h3>client mobx</h3>
      <div>count = {clientCounter.value}</div>
      <button onClick={() => clientCounter.increment()}>inc</button>
    </>
  );
}

export default observer(ClientComponent);
