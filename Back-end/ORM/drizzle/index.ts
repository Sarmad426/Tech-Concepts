import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./src/schema";

const queryConnection = postgres(process.env.DATABASE_URL!);

const db = drizzle(queryConnection, { schema });

await db
    .insert(schema.UserTable)
    .values(
        {
            name: "Nawaz",
            age: 18,
            email: "nawaz@email.com",
        }
    )
    .returning({
        id: schema.UserTable.id,
    }).onConflictDoUpdate({
        target: schema.UserTable.email,
        set: { name: "Updated name" },
    })


const users = await db.query.UserTable.findMany({})


console.log("Users", users);
queryConnection.end();
