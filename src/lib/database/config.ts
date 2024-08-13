import path from "path";
import { open } from "sqlite";
import sqlite3 from "sqlite3";

const databasePath = path.join(process.cwd(), "personal-website.db");

export default async function getDatabase() {
  return open({
    filename: databasePath,
    driver: sqlite3.Database,
  });
}
