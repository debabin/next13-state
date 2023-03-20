import GlobalServerComponent from "./(components)/GlobalServerComponent";
import Providers from "./(components)/Providers";
import ServerComponent from "./(components)/ServerComponent";

import { $globalServerStore, initStore, plus } from "./(store)/store";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const $localServerStore = initStore();

  plus();

  return (
    <>
      <h1>Effector</h1>
      <div style={{ margin: "10px 0" }}>
        <h2>Global data</h2>
        <GlobalServerComponent />
        <Providers state={$globalServerStore.getState()}>{children}</Providers>
      </div>

      <div style={{ margin: "10px 0" }}>
        <h2>Local data</h2>
        <ServerComponent value={$localServerStore.getState()} />
        <Providers state={$localServerStore.getState()}>{children}</Providers>
      </div>
    </>
  );
}
