"use server";

import { projectService } from "@/lib/database/services/projects_service";

export async function getProjects(): Promise<BaseResponse<ProjectTypes[]>> {
  try {
    const projects = await projectService.getProjects();
    return {
      status: true,
      message: "Success get projects",
      data: projects,
    };
  } catch (e: any) {
    return {
      status: false,
      message: e.message,
      data: [],
    };
  }
}
