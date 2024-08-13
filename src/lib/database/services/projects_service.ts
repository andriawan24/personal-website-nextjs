import getDatabase from "../config";

export const projectService = {
  getProjects: async () => {
    const database = await getDatabase();
    const result = await database.get(
      "SELECT projects.*, tags.id as tags_id, tags.name as tags_name FROM projects INNER JOIN project_tags ON projects.id = project_tags.projects_id INNER JOIN tags ON tags.id = project_tags.tags_id",
    );
    console.log(result);
    await database.close();
    return result;
  },
};
