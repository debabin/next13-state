import Providers from "./(components)/Providers";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <h1>Apollo</h1>
      {children}
    </Providers>
  );
}
