import Breadcrumb from "@/components/breadcrumb";
import React from "react";
import RecentProjects from "../recent-projects";

export default function BlogsPage() {
  return (
    <div className="px-4 md:px-32">
      <Breadcrumb title="Blogs" />
      <div className="flex flex-col gap-12 pt-6 pb-4 md:pb-16">
        <RecentProjects />
      </div>
    </div>
  );
}
