"use client";

import { useFormik } from "formik";
import { useReactHookFormContext } from "./Providers";

export default function ClientComponent() {
  const preloadState = useReactHookFormContext() as any;
  const initialValues = preloadState;

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>global server react-hook-form</h3>
      <input
        id="globalServer"
        name="globalServer"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.globalServer}
      />

      <h3>local server react-hook-form</h3>
      <input
        id="localServer"
        name="localServer"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.localServer}
      />

      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
}
