import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './src/schema';


const queryConnection = postgres(process.env.DATABASE_URL!);

console.log("Before")

const db = drizzle(queryConnection, { schema });

// await db.insert(schema.UserTable).values({
//     name: "Sarmad",
//     age: 20,
//     email: 'sarmad@gmail.com',
// })

await db.delete(schema.UserTable)

console.log("After")

// const result = await db.query.UserTable.findMany({});

// console.log('Users', result)
queryConnection.end();