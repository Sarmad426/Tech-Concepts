import 'dotenv/config'

import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL as string, { max: 1 })
export const db = drizzle(sql);
await migrate(db, { migrationsFolder: "./src/migrations/" });
await sql.end();
