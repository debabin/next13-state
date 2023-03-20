import { globalServerStore } from "../(store)/store";

export default function GlobalServerComponent() {
  return (
    <>
      <h3>global server zustand</h3>
      <div>count = {globalServerStore.getState().value}</div>
    </>
  );
}
