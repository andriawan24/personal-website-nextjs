import Breadcrumb from "@/components/breadcrumb";
import React from "react";
import * as motion from "framer-motion/client";
import { Metadata } from "next";
import { allProjects } from "contentlayer/generated";
import ProjectItem from "@/components/project-item";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A place to showcases what am I currently build and what I've done for this several years as a software engineer",
};

export default function ProjectsPage() {
  const projects = allProjects.sort(
    (a, b) =>
      new Date(b.development_start).getTime() -
      new Date(a.development_start).getTime(),
  );

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
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-12 pt-6 pb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project) => {
            return <ProjectItem key={project._id} project={project} />;
          })}
        </div>
      </motion.div>
    </div>
  );
}
