import { allProjects } from "contentlayer/generated";
import React from "react";
import ProjectItem from "@/components/project-item";

export default function RecentProjects(): React.ReactElement {
  const projects = allProjects
    .sort(
      (a, b) =>
        new Date(b.development_start).getTime() -
        new Date(a.development_start).getTime(),
    )
    .slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {projects.map((project) => (
        <ProjectItem key={project._id} project={project} />
      ))}
    </div>
  );
}
