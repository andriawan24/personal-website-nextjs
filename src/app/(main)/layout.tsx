import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { PageConfig } from "@/utils/constants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: PageConfig.title,
  description: PageConfig.description,
  authors: {
    name: PageConfig.author,
    url: PageConfig.githubLink,
  },
  generator: PageConfig.generator,
  keywords: PageConfig.keywords,
  referrer: "same-origin",
  robots: {
    index: true,
    follow: true,
  },
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
  ],
  manifest: "/favicon/site.webmanifest",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
