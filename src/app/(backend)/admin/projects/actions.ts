"use server";

import { projectService } from "@/lib/database/services/projects_service";
import { z } from "zod";
import ProjectForm from "./form/project-form";

const ProjectFormSchema = z.object({
  title: z.string().min(1, "Title cannot be empty"),
  description: z.string().min(1, "Description cannot be empty"),
  github_link: z.string().min(1, "Github link cannot be empty"),
  demo_link: z.string().min(1, "Demo link cannot be empty"),
  roles: z.string().min(1, "Roles cannot be empty"),
  development_date: z.string().min(1, "Develpment date cannot be empty"),
  image: z.instanceof(File).refine((val) => val.size > 0, "File is required"),
});

type FormState =
  | {
      errors?: {
        title?: string[];
        description?: string[];
        github_link?: string[];
        demo_link?: string[];
        roles?: string[];
      };
      message?: string;
    }
  | undefined;

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

export async function createProject(_: FormState, formData: FormData) {
  const validatedFields = ProjectFormSchema.safeParse({
    title: formData.get("title") ?? "",
    description: formData.get("description") ?? "",
    development_date: formData.get("development_date") ?? "",
    github_link: formData.get("github_link") ?? "",
    demo_link: formData.get("demo_link") ?? "",
    roles: formData.get("roles") ?? "",
    image: formData.get("image"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  return {
    message: "success",
  };
}
