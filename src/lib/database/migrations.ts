import getDatabase from "./config";

async function migrate() {
  console.log("run Database");
  const db = await getDatabase();

  await db.run(
    `CREATE TABLE IF NOT EXISTS tags (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)`,
    (err: Error) => {
      if (err) {
        console.error(err.message);
      }
      console.log("articles table created successfully.");
    },
  );

  await db.run(
    `CREATE TABLE IF NOT EXISTS projects (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          description TEXT NOT NULL,
          image TEXT NOT NULL,
          github_link TEXT NOT NULL,
          demo_link TEXT NOT NULL,
          development_start_date TEXT NOT NULL,
          roles 
          created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
          updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)`,
    (err: Error) => {
      if (err) {
        console.error(err.message);
      }
      console.log("articles table created successfully.");
    },
  );
  await db.run(
    `CREATE TABLE IF NOT EXISTS stacks(
        id INTEGER PRIM\ARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        image_url TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)`,
    (err: Error) => {
      if (err) {
        console.error(err.message);
      }
      console.log("articles table created successfully.");
    },
  );
  await db.run(
    `CREATE TABLE IF NOT EXISTS project_overviews(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image_url TEXT NOT NULL,
        project_id INTEGER NOT NULL,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)`,
    (err: Error) => {
      if (err) {
        console.error(err.message);
      }
      console.log("articles table created successfully.");
    },
  );
  await db.run(
    `CREATE TABLE IF NOT EXISTS project_tags(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        projects_id INTEGER NOT NULL,
        tags_id INTEGER NOT NULL,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)`,
    (err: Error) => {
      if (err) {
        console.error(err.message);
      }
      console.log("articles table created successfully.");
    },
  );
  await db.run(
    `CREATE TABLE IF NOT EXISTS project_stacks(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        projects_id INTEGER NOT NULL,
        stacks_id INTEGER NOT NULL,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)`,
    (err: Error) => {
      if (err) {
        console.error(err.message);
      }
      console.log("articles table created successfully.");
    },
  );

  await db.run(
    `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)`,
    (err: Error) => {
      if (err) {
        console.error(err.message);
      }
      console.log("users table created successfully.");
    },
  );

  await db.run(
    `INSERT INTO users (name, email, password) VALUES ('admin', 'admin@gmail.com', '$2b$10$3Q6Zz9Zz9Zz9Zz9Zz9Zz9O') `,
    (err: Error) => {
      if (err) {
        console.error(err.message);
      }
      console.log("admin user created successfully.");
    },
  );

  await db.close();
}

migrate();
