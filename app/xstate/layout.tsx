import Providers from "./(components)/Providers";
import ServerComponent from "./(components)/ServerComponent";

import { globalServerMachine, initMachine } from "./(machine)/machine";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localServerMachine = initMachine();

  const currentGlobalServerMachineState = globalServerMachine.initialState;
  const globalServerMachineState = globalServerMachine.transition(
    currentGlobalServerMachineState,
    "TOGGLE"
  );

  const currentLocalServerMachineState = localServerMachine.initialState;
  const localServerMachineState = localServerMachine.transition(
    currentLocalServerMachineState,
    "TOGGLE"
  );

  return (
    <>
      <h1>Xstate</h1>
      <div style={{ margin: "10px 0" }}>
        <h2>Global data</h2>
        <Providers state={globalServerMachineState.value}>{children}</Providers>
      </div>

      <div style={{ margin: "10px 0" }}>
        <h2>Local data</h2>
        <ServerComponent value={localServerMachineState.value} />
        <Providers state={localServerMachineState.value}>{children}</Providers>
      </div>
    </>
  );
}
