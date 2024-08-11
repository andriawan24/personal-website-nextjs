import Breadcrumb from "@/components/Breadcrumb";
import RecentProjects from "@/components/RecentProjects";
import React from "react";

export default function ProjectsPage() {
  return (
    <div className="px-4 md:px-32">
      <Breadcrumb title="My Projects" />
      <div className="flex flex-col gap-12 pt-6 pb-16">
        <RecentProjects />
        <RecentProjects />
        <RecentProjects />
        <RecentProjects />
      </div>
    </div>
  );
}
