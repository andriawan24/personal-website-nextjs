import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { ProjectModel } from "@/data/models/project_model";

const projectsDirectory = path.join(process.cwd(), "src", "data", "projects");

export function getProjects(): ProjectModel[] {
  const filenames = fs.readdirSync(projectsDirectory);
  const allProjects = filenames.map((name) => {
    const id = name.replace(/\.md$/, "");

    const fullPath = path.join(projectsDirectory, name);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      tags: matterResult.data.tags,
      description: matterResult.data.description,
    };
  });

  return allProjects;
}
