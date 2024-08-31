"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import IconChevronRight from "./icons/icon-chevron-right";
import { capitalize } from "@/utils/helper";
import Pill from "./views/pill";

export default function Breadcrumb({
  title,
  tags,
}: {
  title: string;
  tags?: string[];
}) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4 md:gap-8 py-4 bg-color-background-card-dark md:bg-transparent rounded-md">
      <div className="flex flex-row items-center justify-center">
        {pathname.split("/").map((path, index) => {
          const lastIndex = index == pathname.split("/").length - 1;
          return (
            <div
              key={index}
              className="flex flex-row items-center justify-center"
            >
              {!lastIndex && (
                <>
                  <Link
                    href={`/${path}`}
                    className="hover:opacity-80 transition-all duration-200"
                  >
                    <span className="text-color-text-secondary font-bold">
                      {path ? capitalize(path) : "Home"}
                    </span>
                  </Link>
                  <IconChevronRight />
                </>
              )}
              {lastIndex && (
                <span key={index} className="text-color-text-primary font-bold">
                  {path ? capitalize(path) : "Home"}
                </span>
              )}
            </div>
          );
        })}
      </div>
      <h1 className="text-center text-2xl md:text-5xl font-bold leading-140 text-color-text-primary">
        {title}
      </h1>
      {tags && (
        <div className="flex flex-row flex-wrap items-center justify-center mt-2 gap-2">
          {tags.map((tag, index) => (
            <Pill key={index} text={tag} />
          ))}
        </div>
      )}
    </div>
  );
}
