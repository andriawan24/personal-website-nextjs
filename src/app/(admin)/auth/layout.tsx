import React from "react";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="dark:bg-boxdark-2 dark:text-bodydark min-h-screen">
        {children}
      </div>
    </>
  );
}
