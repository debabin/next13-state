"use client";

import useSWR from "swr";

const fetcher = (...args: any) => fetch(args).then((res) => res.json());

export default function ClientComponent() {
  const { data, isLoading } = useSWR(
    "https://rickandmortyapi.com/api/character",
    fetcher
  );

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <ul>
      <h3>client swr</h3>
      {data.results.map((character: any) => (
        <div key={character.id}>{character.name}</div>
      ))}
    </ul>
  );
}
