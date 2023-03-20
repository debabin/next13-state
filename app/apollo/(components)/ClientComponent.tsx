"use client";

import { gql, useQuery } from "@apollo/client";

const GET_CHARACTERS = gql`
  query Query {
    characters(page: 1) {
      info {
        count
      }
      results {
        id
        name
      }
    }
  }
`;

export default function ClientComponent() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <ul>
      <h3>client</h3>
      {data.characters.results.map((character: any) => (
        <div key={character.id}>{character.name}</div>
      ))}
    </ul>
  );
}
