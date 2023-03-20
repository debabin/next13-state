import { globalServerStore } from "../(store)/store";

export default function GlobalServerComponent() {
  return (
    <>
      <h3>global server redux</h3>
      <div>count = {globalServerStore.getState().counter.value}</div>
    </>
  );
}
