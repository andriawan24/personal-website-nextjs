"use server";

import { projectService } from "@/lib/database/services/projects_service";

export async function get() {
  await projectService.getProjects();
}
