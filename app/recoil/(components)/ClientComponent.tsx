"use client";

import { atom, useRecoilState } from "recoil";

const countState = atom({
  key: "countState",
  default: 0,
});

export default function Page() {
  const [counter, setCounter] = useRecoilState(countState);
  const plus = () => setCounter(counter + 1);

  return (
    <div>
      <h3>client recoil</h3>
      <div>count = {counter}</div>
      <button onClick={() => plus()}>inc</button>
    </div>
  );
}
