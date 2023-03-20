"use client";

import React from "react";
import { RecoilRoot } from "recoil";

export default function Providers({ children }: any) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
