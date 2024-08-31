"use server";

import { tagsService } from "@/lib/database/services/tags_service";

export async function getProjectTags(
  projectId: number,
): Promise<BaseResponse<TagsType[]>> {
  try {
    const projectTags = await tagsService.getProjectTags(projectId);
    return {
      status: true,
      message: "Success get projects",
      data: projectTags,
    };
  } catch (e: any) {
    return {
      status: false,
      message: e.message,
      data: [],
    };
  }
}
