import Providers from "./(components)/Providers";
import { getRandomNumber, globalServerNumber } from "./(store)/store";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localServerNumber = getRandomNumber();

  return (
    <>
      <h1>React-hook-form</h1>
      <div style={{ margin: "10px 0" }}>
        <h2>Global and local data</h2>
        <Providers
          state={{
            globalServer: globalServerNumber,
            localServer: localServerNumber,
          }}
        >
          {children}
        </Providers>
      </div>
    </>
  );
}
