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
