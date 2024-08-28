import getDatabase from "./config";

async function migrate() {
  console.log("Running Database Migrations");
  const db = await getDatabase();

  // Tags table
  await db.run(`
    CREATE TABLE IF NOT EXISTS tags (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )`);

  // Projects table
  await db.run(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      cover_image TEXT NOT NULL,
      thumbnail_image TEXT NOT NULL,
      github_link TEXT NOT NULL,
      demo_link TEXT NOT NULL,
      development_start_date TEXT NOT NULL,
      roles TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )`);

  // Stacks table
  await db.run(`
    CREATE TABLE IF NOT EXISTS stacks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      image_url TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )`);

  // Project overviews table
  await db.run(`
    CREATE TABLE IF NOT EXISTS project_overviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image_url TEXT NOT NULL,
      project_id INTEGER NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (project_id) REFERENCES projects(id)
    )`);

  // Project tags table
  await db.run(`
    CREATE TABLE IF NOT EXISTS project_tags (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      projects_id INTEGER NOT NULL,
      tags_id INTEGER NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (projects_id) REFERENCES projects(id),
      FOREIGN KEY (tags_id) REFERENCES tags(id)
    )`);

  // Project stacks table
  await db.run(`
    CREATE TABLE IF NOT EXISTS project_stacks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      projects_id INTEGER NOT NULL,
      stacks_id INTEGER NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (projects_id) REFERENCES projects(id),
      FOREIGN KEY (stacks_id) REFERENCES stacks(id)
    )`);

  // Users table
  await db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )`);

  // Insert initial data
  await db.run(`
    INSERT INTO users (name, email, password)
    VALUES ('admin', 'admin@gmail.com', '$2b$10$3Q6Zz9Zz9Zz9Zz9Zz9Zz9O')`);

  await db.run(`
    INSERT INTO stacks (name, image_url)
    VALUES ('Kotlin', '/images/img_kotlin.png')`);

  await db.run(`
    INSERT INTO tags (name)
    VALUES ('Mobile Development'), ('Web Development')`);

  await db.run(`
    INSERT INTO projects (title, description, cover_image, thumbnail_image, github_link, demo_link, development_start_date, roles)
    VALUES ('Test', 'Test 123', 'test', 'test', 'https://github.com/andriawan24', 'https://google.com', '2020-01-02', 'Developers')`);

  // Seed project_overviews
  await db.run(`
    INSERT INTO project_overviews (image_url, project_id)
    VALUES ('/images/overview1.png', 1), 
           ('/images/overview2.png', 1)`);

  // Seed project_tags
  await db.run(`
    INSERT INTO project_tags (projects_id, tags_id)
    VALUES (1, 1), 
           (1, 2)`);

  // Seed project_stacks
  await db.run(`
    INSERT INTO project_stacks (projects_id, stacks_id)
    VALUES (1, 1)`);

  await db.close();
  console.log("Database Migrations Completed Successfully");
}

migrate();
