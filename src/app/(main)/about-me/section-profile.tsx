"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Strings } from "@/utils/strings";

export default function SectionProfile() {
  return (
    <motion.div
      className="flex flex-col lg:flex-row gap-12 items-center py-8 md:py-16 overflow-hidden"
      variants={{
        hidden: { y: 200, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <motion.div className="inline-block lg:w-[1500px] lg:h-[550[x]">
        <Image
          className="rounded-2xl transition-all duration-200 transform"
          src={"/images/img_profile.webp"}
          height={550}
          width={500}
          priority={true}
          alt={Strings.imageProfileAlt}
        />
      </motion.div>
      <div className="flex flex-col gap-2 md:gap-6">
        <h3 className="text-3xl font-semibold text-color-text-primary leading-140">
          {Strings.aboutMeTitle}
        </h3>
        <p className="text-lg md:text-xl font-medium leading-140 text-color-text-secondary">
          {Strings.aboutMeDescription1}
        </p>
        <p className="text-lg md:text-xl font-medium leading-140 text-color-text-secondary">
          {Strings.aboutMeDescription2}
        </p>
      </div>
    </motion.div>
  );
}
