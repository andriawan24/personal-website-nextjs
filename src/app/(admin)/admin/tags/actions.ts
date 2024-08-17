"use server";

import { tagsService } from "@/lib/database/services/tags_service";
import { z } from "zod";

const TagsFormSchema = z.object({
  name: z.string().min(1, "Name cannot be empty").trim(),
});

type FormState =
  | {
      errors?: {
        name?: string[];
      };
      message?: string;
    }
  | undefined;

export async function getTags(): Promise<BaseResponse<TagsType[]>> {
  try {
    const tags = await tagsService.get();
    return {
      status: true,
      message: "Success get tags",
      data: tags,
    };
  } catch (e: any) {
    return {
      status: false,
      message: e.message,
      data: [],
    };
  }
}

export async function getTag(
  id: number,
): Promise<BaseResponse<TagsType | undefined>> {
  try {
    const tag = await tagsService.getById(id);
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

export async function createTags(_: FormState, formData: FormData) {
  const validatedFields = TagsFormSchema.safeParse({
    name: formData.get("name"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const tag = await tagsService.create(validatedFields.data.name);
    if (!tag) {
      return {
        errors: {
          name: ["Failed to add tag"],
        },
      };
    }

    return { message: "success" };
  } catch (error: any) {
    return {
      message: "Failed to login " + error.message,
    };
  }
}

export async function deleteTag(id: number) {
  try {
    const tag = await tagsService.delete(id);
    return {
      status: true,
      message: "Success delete tag",
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

export async function updateTags(_: FormState, formData: FormData) {
  const validatedFields = TagsFormSchema.safeParse({
    name: formData.get("name"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const tag = await tagsService.update(
      Number(formData.get("id")),
      validatedFields.data.name,
    );

    if (!tag) {
      return {
        errors: {
          name: ["Failed to update tag"],
        },
      };
    }

    return { message: "success" };
  } catch (error: any) {
    return {
      message: "Failed to login " + error.message,
    };
  }
}
