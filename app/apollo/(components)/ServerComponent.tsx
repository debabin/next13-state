import request, { gql } from "graphql-request";

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

export default async function ServerComponent() {
  const data = (await request(
    "https://rickandmortyapi.com/graphql",
    GET_CHARACTERS
  )) as any;

  return (
    <ul>
      <h3>server</h3>
      {data.characters.results.map((character: any) => (
        <div key={character.id}>{character.name}</div>
      ))}
    </ul>
  );
}
