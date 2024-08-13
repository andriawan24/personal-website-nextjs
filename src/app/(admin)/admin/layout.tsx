import AdminNavbar from "@/components/admin/Navbar";
import AdminSidebar from "@/components/admin/Sidebar";
import { sessionHelper } from "@/lib/session";
import { redirect } from "next/navigation";
import React from "react";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await sessionHelper.verifySession();
  if (!user.isAuth) redirect("/auth/login");

  return (
    <>
      <section className="grid grid-cols-6 dark:bg-boxdark-2 dark:text-bodydark min-h-screen">
        <aside className="bg-slate-900 col-span-1">
          <AdminSidebar />
        </aside>
        <div className="col-span-5">
          <AdminNavbar />
          <main className="p-10 min-h-screen">{children}</main>
        </div>
      </section>
    </>
  );
}
