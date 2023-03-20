import GlobalServerComponent from "./(components)/GlobalServerComponent";
import Providers from "./(components)/Providers";
import ServerComponent from "./(components)/ServerComponent";

import { globalServerStore, initServerStore } from "./(store)/store";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localServerStore = initServerStore();

  globalServerStore.getState().increment();
  localServerStore.getState().increment();

  return (
    <>
      <h1>Zustand</h1>
      <div style={{ margin: "10px 0" }}>
        <h2>Global data</h2>
        <GlobalServerComponent />
        <Providers state={globalServerStore.getState().value}>
          {children}
        </Providers>
      </div>

      <div style={{ margin: "10px 0" }}>
        <h2>Local data</h2>
        <ServerComponent value={localServerStore.getState().value} />
        <Providers state={localServerStore.getState().value}>
          {children}
        </Providers>
      </div>
    </>
  );
}
