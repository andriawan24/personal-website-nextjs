"use client";

import { get } from "@/actions/projects";
import React, { useEffect } from "react";

export default function AdminProjects() {
  useEffect(() => {
    get();
  }, []);

  return (
    <div>
      <h1 className="text-color-text-primary text-2xl font-semibold">
        Projects
      </h1>
    </div>
  );
}
