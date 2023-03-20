export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>React Query</h1>
      {children}
    </>
  );
}
