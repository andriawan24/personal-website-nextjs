import React from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="dark:bg-boxdark-2 dark:text-bodydark">
      {children}
    </section>
  );
}
