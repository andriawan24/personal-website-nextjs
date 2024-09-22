import Breadcrumb from "@/components/breadcrumb";
import { Metadata } from "next";
import React from "react";
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
