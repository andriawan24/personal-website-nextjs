import Breadcrumb from "@/components/breadcrumb";
import React from "react";
import RecentProjects from "../recent-projects";
import * as motion from "framer-motion/client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A place to showcases what am I currently build and what I've done for this several years as a software engineer",
};

export default function ProjectsPage() {
  return (
    <div className="px-4 md:px-24">
      <Breadcrumb title="My Projects" />
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
        className="flex flex-col gap-12 pt-6 pb-16"
      >
        <RecentProjects />
      </motion.div>
    </div>
  );
}
