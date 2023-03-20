import { globalServerCounter } from "../(store)/counter";

export default function GlobalServerComponent() {
  return (
    <>
      <h3>global server mobx</h3>
      <div>count = {globalServerCounter.value}</div>
    </>
  );
}
