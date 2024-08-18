"use client";

import { Strings } from "@/utils/strings";
import { MenuType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const menus: MenuType[] = [
  {
    name: Strings.aboutMe,
    url: Strings.linkAboutMe,
  },
  {
    name: Strings.blogs,
    url: Strings.linkBlogs,
  },
  {
    name: Strings.myProjects,
    url: Strings.linkMyProjects,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky z-10 top-0 flex flex-row justify-between transition-all duration-200 items-center px-4 md:px-32 ${isScrolled ? "bg-color-background-dark shadow-md py-1" : "py-3"}`}
    >
      <Link
        href="/"
        className="cursor-pointer hover:scale-105 duration-200 transition-all active:scale-100 active:duration-0"
      >
        <Image
          src={"/images/img_logo.png"}
          width={80}
          height={80}
          alt={Strings.imageLogoAlt}
        />
      </Link>
      <nav aria-label="Main Navigation">
        <ul className="flex flex-row items-center gap-4 md:gap-7">
          {menus.map((menu) => {
            const isActive = pathname == menu.url;
            return (
              <li
                className={`${isActive ? "text-color-text-primary" : "text-color-text-secondary"} font-medium text-base md:text-lg transition-opacity duration-200 hover:opacity-90`}
                key={menu.url}
              >
                <a href={menu.url}>{menu.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
