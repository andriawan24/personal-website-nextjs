"use server";

import { projectService } from "@/lib/database/services/projects_service";
import { z } from "zod";
import { unlink, writeFile } from "fs/promises";
import path from "path";
import sharp from "sharp";

const ProjectFormSchema = z.object({
  title: z.string().min(1, "Title cannot be empty"),
  description: z.string().min(1, "Description cannot be empty"),
  github_link: z.string().min(1, "Github link cannot be empty"),
  demo_link: z.string().min(1, "Demo link cannot be empty"),
  roles: z.string().min(1, "Roles cannot be empty"),
  development_date: z.string().min(1, "Development date cannot be empty"),
  full_image: z
    .instanceof(File)
    .refine((val) => val.size > 0, "File is required"),
  thumbnail_image: z
    .instanceof(File)
    .refine((val) => val.size > 0, "File is required"),
});

const ProjectUpdateFormSchema = z.object({
  title: z.string().min(1, "Title cannot be empty"),
  description: z.string().min(1, "Description cannot be empty"),
  github_link: z.string().min(1, "Github link cannot be empty"),
  demo_link: z.string().min(1, "Demo link cannot be empty"),
  roles: z.string().min(1, "Roles cannot be empty"),
  development_date: z.string().min(1, "Development date cannot be empty"),
  full_image: z.optional(z.instanceof(File)),
  thumbnail_image: z.optional(z.instanceof(File)),
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

export async function getProject(
  id: number,
): Promise<BaseResponse<ProjectTypes | undefined>> {
  try {
    const project = await projectService.getProject(id);
    return {
      status: true,
      message: "Success get project",
      data: project,
    };
  } catch (e: any) {
    return {
      status: false,
      message: e.message,
      data: undefined,
    };
  }
}

export async function updateProject(_: FormState, formData: FormData) {
  const validatedFields = ProjectUpdateFormSchema.safeParse({
    title: formData.get("title") ?? "",
    description: formData.get("description") ?? "",
    development_date: formData.get("development_date") ?? "",
    github_link: formData.get("github_link") ?? "",
    demo_link: formData.get("demo_link") ?? "",
    roles: formData.get("roles") ?? "",
    thumbnail_image: formData.get("thumbnail_image"),
    full_image: formData.get("full_image"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const id = Number(formData.get("id"));
    const project = await projectService.getProject(id);

    let fullImageName = project?.cover_image ?? "";
    let thumbnailImageName = project?.thumbnail_image ?? "";

    if (validatedFields.data.full_image) {
      const fullImageFile = validatedFields.data.full_image;
      if (fullImageFile.size > 0) {
        console.log(fullImageFile);
        fullImageName = `/images/${Date.now() + "_" + fullImageFile.name.replaceAll(" ", "_")}`;
        const fullImageBuffer = Buffer.from(await fullImageFile.arrayBuffer());
        const fullImageCompressedBuffer = await sharp(fullImageBuffer)
          .resize({ width: 512, height: 512 })
          .toBuffer();
        await writeFile(
          path.join(process.cwd(), "public", fullImageName),
          fullImageCompressedBuffer,
        );
        await unlink(
          path.join(process.cwd(), "public", project?.cover_image ?? ""),
        );
      }
    }

    if (validatedFields.data.thumbnail_image) {
      const thumbnailImageFile = validatedFields.data.thumbnail_image;
      if (thumbnailImageFile.size > 0) {
        thumbnailImageName = `/images/${Date.now() + "_" + thumbnailImageFile.name.replaceAll(" ", "_")}`;
        const thumbnailImageBuffer = Buffer.from(
          await thumbnailImageFile.arrayBuffer(),
        );
        const thumbnailImageCompressedBuffer = await sharp(thumbnailImageBuffer)
          .resize({ width: 512, height: 512 })
          .toBuffer();
        await writeFile(
          path.join(process.cwd(), "public", thumbnailImageName),
          thumbnailImageCompressedBuffer,
        );
        await unlink(
          path.join(process.cwd(), "public", project?.thumbnail_image ?? ""),
        );
      }
    }

    await projectService.updateProject({
      id: id,
      title: validatedFields.data.title,
      description: validatedFields.data.description,
      cover_image: fullImageName,
      thumbnail_image: thumbnailImageName,
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

export async function createProject(_: FormState, formData: FormData) {
  const validatedFields = ProjectFormSchema.safeParse({
    title: formData.get("title") ?? "",
    description: formData.get("description") ?? "",
    development_date: formData.get("development_date") ?? "",
    github_link: formData.get("github_link") ?? "",
    demo_link: formData.get("demo_link") ?? "",
    roles: formData.get("roles") ?? "",
    thumbnail_image: formData.get("thumbnail_image"),
    full_image: formData.get("full_image"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const fullImageFile = validatedFields.data.full_image;
    const thumbnailImageFile = validatedFields.data.thumbnail_image;

    const fullImageName =
      Date.now() + "_" + fullImageFile.name.replaceAll(" ", "_");
    const fullImageBuffer = Buffer.from(await fullImageFile.arrayBuffer());
    const fullImageCompressedBuffer = await sharp(fullImageBuffer)
      .resize({
        width: 512,
        height: 512,
      })
      .toBuffer();

    await writeFile(
      path.join(process.cwd(), "public/images/" + fullImageName),
      fullImageCompressedBuffer,
    );

    const thumbnailImageName =
      Date.now() + "_" + thumbnailImageFile.name.replaceAll(" ", "_");
    const thumbnailImageBuffer = Buffer.from(
      await thumbnailImageFile.arrayBuffer(),
    );
    const thumbnailImageCompressedBuffer = await sharp(thumbnailImageBuffer)
      .resize({ width: 512, height: 512 })
      .toBuffer();

    await writeFile(
      path.join(process.cwd(), "public/images/" + thumbnailImageName),
      thumbnailImageCompressedBuffer,
    );

    await projectService.createProject({
      title: validatedFields.data.title,
      description: validatedFields.data.description,
      cover_image: "/images/" + fullImageName,
      thumbnail_image: "/images/" + thumbnailImageName,
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
    const project = await projectService.getProject(id);

    await unlink(
      path.join(process.cwd(), "public", project?.cover_image ?? ""),
    );
    await unlink(
      path.join(process.cwd(), "public", project?.thumbnail_image ?? ""),
    );

    await projectService.delete(id);

    return {
      status: true,
      message: "Success delete project",
      data: project,
    };
  } catch (e: any) {
    console.log(e);
    return {
      status: false,
      message: e.message,
      data: undefined,
    };
  }
}
