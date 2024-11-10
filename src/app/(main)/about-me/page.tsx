import Breadcrumb from "@/components/breadcrumb";
import { Metadata } from "next";
import React from "react";
import SectionSkills from "./section-skills";
import SectionProfile from "./section-profile";
import SectionExperiences from "./section-experiences";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Description who am I, what are my skills, where I am working and have worked. Anything about me.",
};

export default function About() {
  return (
    <div className="px-4 md:px-24 overflow-hidden">
      <Breadcrumb title="About Me" />
      <SectionProfile />
      <div className="flex flex-col md:flex-row gap-0 md:gap-20">
        <SectionSkills />
        <SectionExperiences />
      </div>
    </div>
  );
}
