import { SocialMediaType } from "@/utils/types";
import React from "react";
import IconGithub from "./icons/IconGithub";
import Image from "next/image";
import Link from "next/link";
import IconLinkedin from "./icons/IconLinkedin";
import IconRss from "./icons/IconRss";

const socials: SocialMediaType[] = [
  {
    name: "Github",
    url: "https://github.com/andriawan24",
    icon: <IconGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/naufal-fawwaz-andriawan/",
    icon: <IconLinkedin />,
  },
  {
    name: "RSS",
    url: "https://localhost:3000/rss.xml",
    icon: <IconRss />,
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col gap-3 py-12 justify-center items-center">
      <div className="flex flex-row items-center justify-center gap-4 md:gap-6">
        {socials.map((social) => (
          <Link
            key={social.name}
            className="hover:opacity-80 transition-all duration-200"
            href={social.url}
            target="_blank"
          >
            {social.icon}
          </Link>
        ))}
      </div>
      <p className="font-semibold md:font-bold text-xs md:text-sm text-color-text-primary">
        Copyright ©{new Date().getFullYear()} All Right Reserved
      </p>
    </footer>
  );
}
