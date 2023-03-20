import GlobalServerComponent from "./(components)/GlobalServerComponent";
import Providers from "./(components)/Providers";
import ServerComponent from "./(components)/ServerComponent";
import { globalServerCounter, Counter } from "./(store)/counter";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localServerCounter = new Counter(0);

  globalServerCounter.increment();
  localServerCounter.increment();

  return (
    <>
      <h1>Mobx</h1>
      <div style={{ margin: "10px 0" }}>
        <h2>Global data</h2>
        <GlobalServerComponent />
        <Providers state={globalServerCounter.value}>{children}</Providers>
      </div>

      <div style={{ margin: "10px 0" }}>
        <h2>Local data</h2>
        <ServerComponent value={localServerCounter.value} />
        <Providers state={localServerCounter.value}>{children}</Providers>
      </div>
    </>
  );
}
