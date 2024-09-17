import { sessionHelper } from "@/lib/session";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import LoginForm from "./login-form";

export default async function AdminLoginPage() {
  const user = await sessionHelper.verifySession();
  if (user.isAuth) redirect("/admin");

  return (
    <main className="px-10 max-w-xl mx-auto my-auto min-h-screen flex flex-col justify-center">
      {/* <div className="bg-color-background-pill-dark p-10 rounded-lg"> */}
      {/* <h1 className="text-3xl font-bold text-color-background-dark">Login</h1> */}
      <LoginForm />
      {/* <div className="flex flex-row items-center justify-center mt-10">
          <Link
            href="/auth/register"
            className="text-center text-color-background-dark font-semibold underline"
          >
            Register here
          </Link>
        </div> */}
      {/* </div> */}
    </main>
  );
}
