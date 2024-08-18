import getDatabase from "../config";

export const stackService = {
  get: async (): Promise<StackTypes[]> => {
    const database = await getDatabase();
    const result = await database.all("SELECT * FROM stacks");
    await database.close();
    return result;
  },
  getById: async (id: number): Promise<StackTypes | undefined> => {
    const database = await getDatabase();
    const result = await database.get("SELECT * FROM stacks WHERE id = ?", [
      id,
    ]);
    await database.close();
    return result as StackTypes;
  },
  create: async (
    name: string,
    imageUrl: string,
  ): Promise<number | undefined> => {
    const database = await getDatabase();
    const result = await database.run(
      "INSERT INTO stacks (name, image_url) VALUES (?, ?)",
      [name, imageUrl],
    );
    await database.close();
    return result.lastID;
  },
  update: async (
    id: number,
    name: string,
    filename: string,
  ): Promise<number | undefined> => {
    const database = await getDatabase();
    const result = await database.run(
      "UPDATE stacks SET name = ?, image_url = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?",
      [name, filename, id],
    );
    await database.close();
    return result.changes;
  },
  delete: async (id: number): Promise<number | undefined> => {
    const database = await getDatabase();
    const result = await database.run("DELETE FROM stacks WHERE id = ?", [id]);
    await database.close();
    return result.changes;
  },
};
