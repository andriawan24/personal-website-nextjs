import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Strings } from "@/utils/strings";
import IconArrowUpRight from "@/components/icons/icon-arrow-up-right";
import IconEmail from "@/components/icons/icon-email";

export default function HeroLanding() {
  return (
    <div className="flex flex-row items-center gap-28 py-4 md:py-20 px-4 md:px-32">
      <div>
        <h1 className="text-4xl md:text-5xl leading-140 font-bold text-color-text-primary">
          Naufal Fawwaz Andriawan
        </h1>
        <h3 className="text-xl md:text-2xl mt-2 md:mt-1 leading-140 font-semibold text-color-text-primary">
          Software Engineer
        </h3>
        <p className="text-color-text-secondary leading-140 text-xl md:text-2xl mt-4">
          I`m a software engineer with more 4+ years of experience. My goal is
          to become a proficient and versatile software engineer and deliver
          high-quality solutions for various platforms and domains
        </p>
        <div className="flex flex-row items-center mt-8 gap-2 md:gap-6">
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1VF2v5nn-JCUPeafbBJ4t67UOdCtfxAt1/view?usp=drive_link"
            className="flex flex-row items-center gap-1 md:gap-2 transition-all hover:opacity-80 bg-color-background-button-dark px-4 md:px-6 py-3 rounded-lg"
          >
            <span className="text-color-text-primary text-base md:text-lg font-bold leading-140">
              Resume PDF
            </span>
            <IconArrowUpRight />
          </Link>
          <Link
            target="_blank"
            href="mailto:fawaznaufal23@gmail.com"
            className="flex flex-row items-center gap-1 md:gap-2 transition-all hover:opacity-80 border-2 border-color-text-primary px-4 md:px-6 py-3 rounded-lg"
          >
            <span className="text-color-text-primary text-base md:text-lg font-bold leading-140">
              Contact Me
            </span>
            <IconEmail />
          </Link>
        </div>
      </div>
      <div className="hidden lg:block flex-none">
        <Image
          className="rounded-full object-cover object-top w-64 h-64 me-12"
          src={"/images/img_profile.webp"}
          loading="lazy"
          width={500}
          height={500}
          alt={Strings.imageProfileAlt}
        />
      </div>
    </div>
  );
}
