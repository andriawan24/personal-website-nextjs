import Breadcrumb from "@/components/Breadcrumb";
import RecentProjects from "@/components/RecentProjects";
import React from "react";

export default function Blogs() {
  return (
    <div className="px-32">
      <Breadcrumb title="Blogs" />
      <div className="flex flex-col gap-12 pt-6 pb-16">
        <RecentProjects />
        <RecentProjects />
        <RecentProjects />
        <RecentProjects />
      </div>
    </div>
  );
}
