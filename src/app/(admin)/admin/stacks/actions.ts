"use server";

import { stackService } from "@/lib/database/services/stacks_service";
import { unlink, writeFile } from "fs/promises";
import path from "path";
import sharp from "sharp";
import { z } from "zod";

const StacksFormSchema = z.object({
  name: z.string().min(1, "Name cannot be empty").trim(),
  image: z.instanceof(File).refine((val) => val.size > 0, "File is required"),
});

const StacksUpdateFormSchema = z.object({
  name: z.string().min(1, "Name cannot be empty").trim(),
  image: z.optional(z.instanceof(File)),
});

type FormState =
  | {
      errors?: {
        name?: string[];
      };
      message?: string;
    }
  | undefined;

export async function getStacks(): Promise<BaseResponse<any>> {
  try {
    const stacks = await stackService.get();
    console.log(stacks);
    return {
      status: true,
      message: "Success get stacks",
      data: stacks,
    };
  } catch (e: any) {
    return {
      status: false,
      message: e.message,
      data: [],
    };
  }
}

export async function getStack(
  id: number,
): Promise<BaseResponse<StackTypes | undefined>> {
  try {
    const tag = await stackService.getById(id);
    return {
      status: true,
      message: "Success get tag",
      data: tag,
    };
  } catch (e: any) {
    return {
      status: false,
      message: e.message,
      data: undefined,
    };
  }
}

export async function createStacks(_: FormState, formData: FormData) {
  const validatedFields = StacksFormSchema.safeParse({
    name: formData.get("name"),
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

    await stackService.create(validatedFields.data.name, "/images/" + filename);

    return { message: "success" };
  } catch (error: any) {
    console.log(error);
    return {
      message: "Failed to upload " + error,
    };
  }
}

export async function deleteStack(id: number) {
  try {
    const stack = await stackService.getById(id);

    await stackService.delete(id);
    await unlink(path.join(process.cwd(), "public", stack?.image_url ?? ""));

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

export async function updateStack(_: FormState, formData: FormData) {
  const validatedFields = StacksUpdateFormSchema.safeParse({
    name: formData.get("name"),
    image: formData.get("image"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const stack = await stackService.getById(Number(formData.get("id")));
    let finalFilename = stack?.image_url ?? "";

    if (validatedFields.data.image) {
      console.log("Go to image upload");
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

      await unlink(path.join(process.cwd(), "public", stack?.image_url ?? ""));

      finalFilename = "/images/" + filename;
    }

    await stackService.update(
      stack?.id ?? 0,
      validatedFields.data.name,
      finalFilename,
    );

    return { message: "success" };
  } catch (error: any) {
    return {
      message: "Failed to login " + error.message,
    };
  }
}
