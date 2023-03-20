import { $globalServerStore } from "../(store)/store";

export default function GlobalServerComponent() {
  return (
    <>
      <h3>global server effector</h3>
      <div>count = {$globalServerStore.getState()}</div>
    </>
  );
}
