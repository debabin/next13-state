"use client";

import { useMachine } from "@xstate/react";
import { initMachine } from "../(machine)/machine";
import { useXstateContext } from "./Providers";

const clientMachine = initMachine();

export default function ClientComponent() {
  const value = useXstateContext() as any;
  const [preloadMachine, preloadSend] = useMachine(clientMachine, {
    state: { ...clientMachine.initialState, value },
  });

  const [machine, clientSend] = useMachine(clientMachine);

  return (
    <>
      <h3>preload client xstate</h3>
      <button onClick={() => preloadSend("TOGGLE")}>
        {preloadMachine.matches("inactive") ? "Off" : "On"}
      </button>

      <h3>client xstate</h3>
      <button onClick={() => clientSend("TOGGLE")}>
        {machine.matches("inactive") ? "Off" : "On"}
      </button>
    </>
  );
}
