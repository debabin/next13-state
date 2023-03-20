export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>SWR</h1>
      {children}
    </>
  );
}
