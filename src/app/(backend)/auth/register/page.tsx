"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { signUp } from "./actions";

export default function AdminRegisterPage() {
  const [state, action] = useFormState(signUp, undefined);

  useEffect(() => {
    if (state?.message === "success") {
      window.location.href = "/admin/";
    }
  }, [state]);

  return (
    <main className="px-10 max-w-xl mx-auto my-auto min-h-screen flex flex-col justify-center">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign up
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Already have an account?&nbsp;
              <a
                className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                href="/auth/login"
              >
                Sign in here
              </a>
            </p>
          </div>

          <div className="mt-5">
            <form action={action}>
              <div className="grid gap-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Name
                  </label>
                  <div className="space-y-3">
                    <input
                      type="text"
                      name="name"
                      className="py-3 px-4 block w-full border-gray-200 border-2 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Enter your name"
                    />
                  </div>
                  {state?.errors?.name && (
                    <p className="text-xs text-red-600 mt-2">
                      {state?.errors?.name?.at(0)}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Email address
                  </label>
                  <div className="space-y-3">
                    <input
                      type="email"
                      name="email"
                      className="py-3 px-4 block w-full border-gray-200 border-2 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Enter your email"
                    />
                  </div>
                  {state?.errors?.email && (
                    <p className="text-xs text-red-600 mt-2">
                      {state?.errors?.email?.at(0)}
                    </p>
                  )}
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      className="py-3 px-4 block w-full border-gray-200 border-2 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>
                  {state?.errors?.password && (
                    <p
                      className="text-xs text-red-600 mt-2"
                      id="password-error"
                    >
                      {state.errors.password.at(0)}
                    </p>
                  )}
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="keywords"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Keywords
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      id="keywords"
                      name="keywords"
                      placeholder="Enter the keywords"
                      className="py-3 px-4 block w-full border-gray-200 border-2 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>
                  {state?.errors?.keywords && (
                    <p
                      className="text-xs text-red-600 mt-2"
                      id="keywords-error"
                    >
                      {state.errors.keywords.at(0)}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
