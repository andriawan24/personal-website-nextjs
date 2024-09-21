import Breadcrumb from "@/components/breadcrumb";
import { Strings } from "@/utils/strings";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import * as motion from "framer-motion/client";
import SectionSkills from "./section-skills";
import SectionProfile from "./section-profile";
import SectionExperiences from "./section-experiences";

export const metadata: Metadata = {
  title: "About Me",
};

export default function About() {
  return (
    <div className="px-4 md:px-32 overflow-hidden">
      <Breadcrumb title="About Me" />
      <SectionProfile />
      <SectionSkills />
      <SectionExperiences />
    </div>
  );
}
