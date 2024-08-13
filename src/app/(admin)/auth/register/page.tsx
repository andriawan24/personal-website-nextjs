"use client";

import { register } from "@/actions/auth";
import Link from "next/link";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";

export default function AdminRegisterPage() {
  const [state, action] = useFormState(register, undefined);

  useEffect(() => {
    if (state?.message === "success") {
      window.location.href = "/admin/";
    }
  }, [state]);

  return (
    <main className="px-10 max-w-xl mx-auto my-auto min-h-screen flex flex-col justify-center">
      <div className="bg-color-background-card-dark p-10 rounded-lg">
        <h1 className="text-3xl font-bold text-color-text-primary">Register</h1>
        <form action={action} className="mt-8">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-color-text-primary text-lg font-semibold"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name..."
              className="px-4 py-2 w-full bg-color-background-light text-color-background-dark font-medium border-none outline-none rounded-md"
            />
            {state?.errors?.name && (
              <p className="text-red-400 text-sm">{state.errors.name}</p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-color-text-primary text-lg font-semibold"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email..."
              className="px-4 py-2 w-full bg-color-background-light text-color-background-dark font-medium border-none outline-none rounded-md"
            />
            {state?.errors?.email && (
              <p className="text-red-400 text-sm">{state.errors.email}</p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-color-text-primary text-lg font-semibold"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="text"
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
            Register
          </button>
        </form>
        <div className="flex flex-row items-center justify-center mt-10">
          <Link
            href={"/admin/login"}
            className="text-center text-color-text-primary font-semibold underline"
          >
            Login Here
          </Link>
        </div>
      </div>
    </main>
  );
}
