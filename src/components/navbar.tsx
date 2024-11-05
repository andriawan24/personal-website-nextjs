"use client";

import { Strings } from "@/utils/strings";
import { MenuType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactElement, useEffect, useState } from "react";
import { animate, motion, useMotionValueEvent, useScroll } from "framer-motion";
import classNames from "classnames";

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

export default function Navbar(): ReactElement {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const [onTop, setOnTop] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const prev = scrollYProgress.getPrevious() ?? 0;
    if (prev === 0 && latest === 1) {
      setOnTop(true);
      return;
    }

    if (latest > prev && latest > 0.15) {
      setOnTop(false);
    } else {
      setOnTop(true);
    }
  });

  return (
    <motion.header
      className={classNames(
        "navbar",
        { "shadow-md": !onTop },
        { "shadow-none": onTop },
      )}
    >
      <Link href="/" className="nav-logo">
        <Image
          src={"/images/img_logo.webp"}
          width={80}
          height={80}
          alt={Strings.imageLogoAlt}
        />
      </Link>
      <nav>
        <ul className="nav-container">
          {menus.map((menu) => {
            const isActive = pathname == menu.url;
            return (
              <li
                className={`${isActive ? "text-color-text-primary" : "text-color-text-secondary"} nav-item`}
                key={menu.url}
              >
                <a href={menu.url}>{menu.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
}
