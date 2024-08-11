"use server";

import getDatabase from "../database/config";
import UserTypes from "../models/users_types";

export async function getUserByEmail(
  email: string,
): Promise<UserTypes | undefined> {
  const db = await getDatabase();
  const result = await db.get("SELECT * FROM users WHERE email = ?", [email]);
  return result as UserTypes;
}

export async function createUser(user: UserTypes): Promise<UserTypes> {
  const db = await getDatabase();
  await db.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [
    user.name,
    user.email,
    user.password,
  ]);
  const newUser = await getUserByEmail(user.email);
  return newUser as UserTypes;
}
