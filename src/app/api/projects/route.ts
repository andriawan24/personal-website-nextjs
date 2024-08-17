import { projectService } from "@/lib/database/services/projects_service";

export async function GET(request: Request) {
  try {
    const projects = await projectService.getProjects();
    return Response.json({
      status: true,
      message: "Success get projects",
      data: projects,
    });
  } catch (e: any) {
    return Response.json({
      status: false,
      message: e.message,
    });
  }
}
