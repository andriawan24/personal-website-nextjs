"use server";

import { projectService } from "@/lib/database/services/projects_service";
import { z } from "zod";
import ProjectForm from "./form/project-form";
import { unlink, writeFile } from "fs/promises";
import path from "path";
import sharp from "sharp";

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

  try {
    const file = validatedFields.data.image;
    const filename = Date.now() + "_" + file.name.replaceAll(" ", "_");
    const buffer = Buffer.from(await file.arrayBuffer());
    const compressedBuffer = await sharp(buffer)
      .resize({
        width: 512,
        height: 512,
      })
      .toBuffer();

    await writeFile(
      path.join(process.cwd(), "public/images/" + filename),
      compressedBuffer,
    );

    await projectService.createProject({
      title: validatedFields.data.title,
      description: validatedFields.data.description,
      image: "/images/" + filename,
      github_link: validatedFields.data.github_link,
      demo_link: validatedFields.data.demo_link,
      development_start_date: validatedFields.data.development_date,
      roles: validatedFields.data.roles,
    });

    return {
      message: "success",
    };
  } catch (error: any) {
    return {
      message: "Failed to upload " + error,
    };
  }
}

export async function deleteProject(id: number) {
  try {
    const stack = await projectService.getProject(id);

    await projectService.delete(id);
    await unlink(path.join(process.cwd(), "public", stack?.image ?? ""));

    return {
      status: true,
      message: "Success delete stack",
      data: stack,
    };
  } catch (e: any) {
    return {
      status: false,
      message: e.message,
      data: undefined,
    };
  }
}
