import 'dotenv/config'

import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL as string, { max: 1 })
export const db = drizzle(sql);
await migrate(db, { migrationsFolder: "migrations" });
await sql.end();

// import { drizzle } from 'drizzle-orm/postgres-js';
// import { migrate } from 'drizzle-orm/postgres-js/migrator';
// import postgres from 'postgres';
// import { UserTable } from './schema';

// // for migrations
// const migrationClient = postgres(process.env.DATABASE_URL as string, { max: 1 });
// migrate(drizzle(migrationClient), {
//     migrationsFolder: './src/migrations'
// })

// // for query purposes
// const queryClient = postgres(process.env.DATABASE_URL as string);
// export const db = drizzle(queryClient);



// import { drizzle } from 'drizzle-orm/postgres-js';
// import { migrate } from 'drizzle-orm/postgres-js/migrator';
// import postgres from 'postgres';

// // for migrations
// const migrationClient = postgres(process.env.DATABASE_URL as string, { max: 1 });

// async function main(){
//     migrate(drizzle(migrationClient), {
//         migrationsFolder:'./src/migrations'
//     })
//     await migrationClient.end();
// }

// main()
