import getDatabase from "../config";

export const projectService = {
  getProjects: async (): Promise<ProjectTypes[]> => {
    const database = await getDatabase();
    const result = await database.all("SELECT * FROM projects");
    await database.close();
    return result as ProjectTypes[];
  },
  createProject: async (project: ProjectTypes) => {},
};
