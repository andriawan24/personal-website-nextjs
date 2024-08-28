import getDatabase from "../config";

export const projectService = {
  getProjects: async (): Promise<ProjectTypes[]> => {
    const database = await getDatabase();
    const result = await database.all("SELECT * FROM projects");
    await database.close();
    return result as ProjectTypes[];
  },
  getProject: async (id: number): Promise<ProjectTypes | undefined> => {
    const database = await getDatabase();
    const result = await database.get(
      "SELECT * FROM projects WHERE id = ?",
      id,
    );
    await database.close();
    return result as ProjectTypes;
  },
  createProject: async (project: ProjectBodyTypes) => {
    const database = await getDatabase();
    const result = await database.run(
      "INSERT INTO projects (title, description, image, github_link, demo_link, development_start_date, roles) VALUES (?, ?, ?, ?, ?, ?, ?)",
      project.title,
      project.description,
      project.image,
      project.github_link,
      project.demo_link,
      project.development_start_date,
      project.roles,
    );
    await database.close();
    return result.lastID;
  },
  delete: async (id: number): Promise<number | undefined> => {
    const database = await getDatabase();
    const result = await database.run("DELETE FROM projects WHERE id = ?", [
      id,
    ]);
    await database.close();
    return result.changes;
  },
};
