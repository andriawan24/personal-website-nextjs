import { sessionHelper } from "@/lib/session";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";
import { signOut } from "./actions";

export const metadata: Metadata = {
  title: "Admin | Naufal Fawwaz Andriawan",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await sessionHelper.verifySession();
  if (!user.isAuth) redirect("/auth/login");

  return (
    <>
      <main className="flex min-h-screen flex-col bg-color-background-dark">
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"></header>
          <main className="grid flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-4 bg-muted/40">
            {children}
          </main>
        </div>
      </main>
    </>
  );
}
