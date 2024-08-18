"use client";

import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { signIn } from "./action";

export default function LoginForm() {
  const [state, action] = useFormState(signIn, undefined);

  useEffect(() => {
    if (state?.message == "success") {
      redirect("/admin");
    }
  }, [state]);

  return (
    <form action={action} className="mt-8">
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-color-background-dark text-lg font-semibold"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email..."
          className="px-4 py-2 w-full bg-color-background-light text-color-background-dark font-medium border-none outline-none rounded-md"
        />
        {state?.errors?.email && (
          <p className="text-red-400 text-sm">{state.errors.email.at(0)}</p>
        )}
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-color-background-dark text-lg font-semibold"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password..."
          className="px-4 py-2 w-full bg-color-background-light text-color-background-dark font-medium border-none outline-none rounded-md"
        />
        {state?.errors?.password && (
          <p className="text-red-400 text-sm">{state.errors.password}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-color-background-button-dark mt-4 w-full py-2 text-color-text-primary font-semibold rounded-md hover:opacity-80 transition-all duration-200 active:opacity-100"
      >
        Login
      </button>
    </form>
  );
}
