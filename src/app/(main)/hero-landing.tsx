import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Strings } from "@/utils/strings";
import IconArrowUpRight from "@/components/icons/icon-arrow-up-right";
import IconEmail from "@/components/icons/icon-email";
import * as motion from "framer-motion/client";

export default function HeroLanding() {
  return (
    <motion.div
      variants={{
        hidden: { y: 200, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
      }}
      className="flex flex-row items-center gap-10 py-4 md:py-20 px-4 md:px-24"
    >
      <div>
        <h1 className="text-4xl md:text-5xl leading-140 font-bold text-color-text-primary">
          Naufal Fawwaz Andriawan
        </h1>
        <h3 className="text-md md:text-2xl pt-2 leading-140 font-semibold text-color-text-primary">
          Mobile Application Engineer
        </h3>
        <p className="text-color-text-secondary leading-140 text-md md:text-xl mt-2">
          I`m a mobile application engineer with more than 3 years of
          experience. My goal is to become a proficient and versatile mobile
          application engineer and deliver high-quality solutions for people
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
          src={"/images/img_fawwaz.webp"}
          loading="lazy"
          width={500}
          height={500}
          alt={Strings.imageProfileAlt}
        />
      </div>
    </motion.div>
  );
}
