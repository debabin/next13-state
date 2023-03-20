"use client";

import { useQuery } from "@tanstack/react-query";

const getCharacters = async () => {
  return fetch("https://rickandmortyapi.com/api/character").then((data) =>
    data.json()
  );
};
export default function ClientComponent() {
  const { data, isLoading } = useQuery({
    queryKey: ["getCharacters"],
    queryFn: getCharacters,
  });

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <ul>
      <h3>client react query</h3>
      {data.results.map((character: any) => (
        <div key={character.id}>{character.name}</div>
      ))}
    </ul>
  );
}
