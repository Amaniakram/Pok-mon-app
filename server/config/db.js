import sqlite3 from 'sqlite3';
import { readFileSync } from 'fs';
import path from 'path';

// Create a new database instance
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) console.error('Database opening error:', err);
});

// Read and execute the schema.sql file
const schema = readFileSync(path.resolve('db/schema.sql'), 'utf-8');
db.exec(schema, (err) => {
  if (err) console.error('Schema execution error:', err);
  else console.log('Schema successfully loaded!');
});

export default db;
