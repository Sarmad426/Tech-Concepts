// import {pgTable, uuid, varchar} from 'drizzle-orm/pg-core'

// export const UserTable = pgTable('user',{
//     id: uuid('id').primaryKey().defaultRandom(),
//     name: varchar('name',{length:255}).notNull(),
// })

import { integer, serial, text, pgTable } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const users = pgTable('user', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
});