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
      transition={{ duration: 0.3 }}
      className="flex flex-row items-center gap-20 py-4 md:py-20 px-4 md:px-24 hero-landing"
    >
      <div>
        <h1 className="text-2xl md:text-3xl leading-140 font-bold text-color-text-primary">
          Hello, I&apos;m a Software Engineer
        </h1>
        <p className="text-color-text-secondary leading-140 text-md md:text-lg mt-2">
          I love coding, primarily for creating Android and iOS applications,
          but I like to explore any other things from web frontend, backend, to
          AI. My goal is to become a skilled and versatile software engineer,
          delivering high-quality solutions for people
        </p>
        <div className="flex flex-row items-center mt-8 gap-2 md:gap-6">
          <motion.span whileTap={{ scale: 1.1 }}>
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1VF2v5nn-JCUPeafbBJ4t67UOdCtfxAt1/view?usp=drive_link"
              rel="noopener noreferrer"
              className="btn bg-color-background-button-dark"
            >
              <span className="text-color-text-primary text-base md:text-md font-bold leading-140">
                Resume PDF
              </span>
              <IconArrowUpRight />
            </Link>
          </motion.span>
          <motion.span whileTap={{ scale: 1.1 }}>
            <Link
              target="_blank"
              href="mailto:fawaznaufal23@gmail.com"
              className="btn bordered"
            >
              <span className="text-color-text-primary text-base md:text-md font-bold leading-140">
                Contact Me
              </span>
              <IconEmail />
            </Link>
          </motion.span>
        </div>
      </div>
      <div className="hidden lg:block flex-none">
        <Image
          className="rounded-full object-cover object-top w-64 h-64 me-12"
          src={"/images/img_home.webp"}
          loading="lazy"
          width={500}
          height={500}
          alt={Strings.imageProfileAlt}
        />
      </div>
    </motion.div>
  );
}
