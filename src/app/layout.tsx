import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { PageConfig } from "@/utils/constants";
import { Metadata } from "next";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: PageConfig.applicationName,
  title: {
    template: `%s | ${PageConfig.title}`,
    default: PageConfig.title,
  },
  description: PageConfig.description,
  authors: {
    name: PageConfig.author,
    url: PageConfig.githubLink,
  },
  generator: PageConfig.generator,
  keywords: PageConfig.keywords,
  creator: PageConfig.author,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} bg-color-background-dark`}>
        {children}
      </body>
    </html>
  );
}
