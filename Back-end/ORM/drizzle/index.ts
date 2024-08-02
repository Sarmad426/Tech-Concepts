import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./src/schema";

const queryConnection = postgres(process.env.DATABASE_URL!);

const db = drizzle(queryConnection, { schema });


const users = await db.query.UserTable.findMany({})


console.log("Users", users);
queryConnection.end();
