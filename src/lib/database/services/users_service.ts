import getDatabase from "../config";
import UserTypes from "../models/users_types";

export const userService = {
  getUserByEmail: async (email: string): Promise<UserTypes | undefined> => {
    const db = await getDatabase();
    const result = await db.get("SELECT * FROM users WHERE email = ?", [email]);
    await db.close();
    return result as UserTypes;
  },

  createUser: async (user: UserTypes): Promise<UserTypes> => {
    const db = await getDatabase();
    await db.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [
      user.name,
      user.email,
      user.password,
    ]);
    const newUser = await db.get("SELECT * FROM users WHERE email = ?", [
      user.email,
    ]);
    await db.close();
    return newUser as UserTypes;
  },
};
