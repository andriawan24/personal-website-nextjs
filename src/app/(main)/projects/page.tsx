import Breadcrumb from "@/components/breadcrumb";
import React from "react";
import RecentProjects from "../recent-projects";

export default function ProjectsPage() {
  return (
    <div className="px-4 md:px-32">
      <Breadcrumb title="My Projects" />
      <div className="flex flex-col gap-12 pt-6 pb-16">
        <RecentProjects />
      </div>
    </div>
  );
}
