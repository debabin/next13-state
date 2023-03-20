"use client";

import { getCounterValue } from "../(store)/repos/selector";
import { increment } from "../(store)/repos/slice";
import { useDispatch, useSelector } from "react-redux";

export default function ClientComponent() {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  return (
    <>
      <h3>client redux</h3>
      <div>count = {value}</div>
      <button onClick={() => dispatch(increment())}>inc</button>
    </>
  );
}
