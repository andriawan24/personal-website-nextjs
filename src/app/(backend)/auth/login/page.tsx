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
      <LoginForm />
    </main>
  );
}
