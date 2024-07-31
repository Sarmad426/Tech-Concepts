import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './src/schema';


const queryConnection = postgres(process.env.DATABASE_URL!);

const db = drizzle(queryConnection, { schema });

const result = await db.query.users.findMany({});

console.log('Users', result)