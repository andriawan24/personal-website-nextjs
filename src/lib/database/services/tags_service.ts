import getDatabase from "../config";

export const tagsService = {
  get: async (): Promise<TagsType[]> => {
    const database = await getDatabase();
    const result = await database.all("SELECT * FROM tags");
    await database.close();
    return result;
  },
  getById: async (id: number): Promise<TagsType | undefined> => {
    const database = await getDatabase();
    const result = await database.get("SELECT * FROM tags WHERE id = ?", [id]);
    await database.close();
    return result as TagsType;
  },
  create: async (name: string): Promise<number | undefined> => {
    const database = await getDatabase();
    const result = await database.run("INSERT INTO tags (name) VALUES (?)", [
      name,
    ]);
    await database.close();
    return result.lastID;
  },
  update: async (id: number, name: string): Promise<number | undefined> => {
    const database = await getDatabase();
    const result = await database.run("UPDATE tags SET name = ? WHERE id = ?", [
      name,
      id,
    ]);
    await database.close();
    return result.changes;
  },
  delete: async (id: number): Promise<number | undefined> => {
    const database = await getDatabase();
    const result = await database.run("DELETE FROM tags WHERE id = ?", [id]);
    await database.close();
    return result.changes;
  },
};
