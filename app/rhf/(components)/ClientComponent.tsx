"use client";

import { useForm } from "react-hook-form";
import { useReactHookFormContext } from "./Providers";

export default function ClientComponent() {
  const preloadState = useReactHookFormContext() as any;
  const defaultValues = preloadState;

  const { register, handleSubmit } = useForm({
    defaultValues,
  });
  const onSubmit = (data: any) => alert(JSON.stringify(data, null, 2));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>global server react-hook-form</h3>
      <input
        defaultValue={defaultValues.globalServer}
        {...register("globalServer")}
      />

      <h3>local server react-hook-form</h3>
      <input
        defaultValue={defaultValues.localServer}
        {...register("localServer", { required: true })}
      />

      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
}
