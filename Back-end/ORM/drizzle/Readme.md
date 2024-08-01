# Drizzle ORM

Drizzle ORM is a headless TypeScript ORM with a head. 🐲

It looks and feels simple, performs on day 1000 of your project, lets you do things your way, and is there when you need it.

It’s the only ORM with both **relational** and **SQL-like** query APIs, providing you the best of both worlds when it comes to accessing your relational data. Drizzle is lightweight, performant, type safe, non-lactose, gluten-free, sober, flexible and serverless-ready by design. Drizzle is not just a library, it’s an experience. 🤩

Official Docs : <https://orm.drizzle.team/docs/overview>

## Schema

**Simple User schema:**

```ts
import { pgTable, serial, varchar, } from "drizzle-orm/pg-core";

export const UserTable = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
})
```

**Extended Schema:**

```ts
import { integer, pgEnum, pgTable, serial, varchar } from "drizzle-orm/pg-core";

// Postgresql Enum
export const UserRole = pgEnum('userRole', ['ADMIN', 'USER'])

export const UserTable = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    age: integer('age').$type<18 | 60>().notNull(),
    email: varchar('email', { length: 2555 }).unique().notNull(),
    role: UserRole('userRole').default('USER').notNull(),
})
```

**One to One relationship:**

```ts
// Referencing one to one relationship with user table

export const UserPreferencesTable = pgTable('UserPreferences', {
    id: serial('id').primaryKey(),
    emailUpdates: boolean('emailUpdates').notNull(),
    userId: serial('userId').references(() => UserTable.id).notNull(),
})
```

**One to many relationship:**

```ts
// Referencing one to many relationship with user table

export const PostsTable = pgTable('posts', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 255 }).notNull(),
    ratings: real('ratings').default(0).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
    authorId: serial("userId")
        .references(() => UserTable.id)
        .notNull(),
})
```

**Many to Many relationship:**

```ts
export const CategoryTable = pgTable("Category", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
});

// Creating join table for many to many relationship between posts and category table

export const PostCategoryTable = pgTable(
    "PostCategory",
    {
        postId: serial("postId").references(() => PostsTable.id).notNull(),
        categoryId: serial("categoryId").references(() => CategoryTable.id).notNull(),
    },
    // Creating a composite primary key
    (table) => {
        return {
            pk: primaryKey({ columns: [table.postId, table.categoryId] }),
        };
    }
);
```

view the final schema in [schema.ts](./src/schema.ts) file.

## Migrations

I am using bun as a runtime and as a package manager. Bun supports typescript out of the box which is why there is no need for an extra build process to transpile typescript code to javascript and then run the javascript file.

**Initialize the bun project:**

```bash
bun init
```

**Install dependencies:**

```bash
bun i
```

**Write the following script in `package.json`**

```bash
  "scripts": {
    "db:generate": "drizzle-kit generate",
    "db:drop": "drizzle-kit drop",
    "db:migrate": "tsx migrate.ts",
    "db:push": "drizzle-kit push",
    "db:studio": "drizzle-kit studio"
  }
```

**Generate migrations:**

```bash
bun db:generate
```

**Perform Migrations:**

```bash
bun db:migrate
```

**Run drizzle studio:**

```bash
bun db:studio
```

### CRUD operations

**Inserting data:**

```ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./src/schema";

const queryConnection = postgres(process.env.DATABASE_URL!);

const db = drizzle(queryConnection, { schema });

// Inserting data
const user = await db
    .insert(schema.UserTable)
    .values({
        name: "Sarmad",
        age: 20,
        email: "sarmad@email.com",
    })
    // Returns the id of the new user
    .returning({
        id: schema.UserTable.id,
    });

// Closing the connection
queryConnection.end();
```

**Inserting multiple values:**

```ts

const users = await db
    .insert(schema.UserTable)
    .values([{
        name: "Shehbaz",
        age: 17,
        email: "shehbaz@email.com",
        role: "ADMIN",
    },
    {
        name: "Nawaz",
        age: 18,
        email: "nawaz@email.com",
    }
    ])
    .returning({
        id: schema.UserTable.id,
    });
```

**Returning multiple values:**

```ts
const user = db.insert(schema.UserTable).values([{
    name:"New user",
    age: 18,
    email: "new_user@email.com",
}]).returning({
    id: schema.UserTable.id,
    userName: schema.UserTable.name
})
```

**`onConflictDoUpdate` operation:**

This operations is fired when a same target value appears to be twice.

```ts
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
```
