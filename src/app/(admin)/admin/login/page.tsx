import Link from "next/link";
import React from "react";

export default function AdminLoginPage() {
  return (
    <main>
      <h1>Login</h1>
      <Link href={"/admin/register"}>Register here</Link>
    </main>
  );
}
