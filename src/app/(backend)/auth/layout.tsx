import { Metadata } from "next";
import React from "react";

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
  return (
    <>
      <div className="min-h-screen bg-color-background-dark">{children}</div>
    </>
  );
}
