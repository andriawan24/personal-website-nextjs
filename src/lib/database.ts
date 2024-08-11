"use server";

import path from "path";
import { open } from "sqlite";
import sqlite3 from "sqlite3";

const databasePath = path.join(process.cwd(), "personal-website.db");

export async function openDb() {
  return open({
    filename: databasePath,
    driver: sqlite3.Database,
  });
}

export async function getQuery(query: string): Promise<any> {
  const db = await openDb();
  const result = await db.get(query);
  await db.close();
  return JSON.stringify(result);
}

export async function postQuery(query: string, values: any[]): Promise<any> {
  const db = await openDb();
  const result = await db.run(query, values);
  await db.close();
  return JSON.stringify(result);
}
