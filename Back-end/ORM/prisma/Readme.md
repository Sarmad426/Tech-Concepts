# Prisma

Prisma is a next-generation **ORM** that simplifies working with databases for application developers. It includes the following tools:
Visit the Official Docs for more info.

<https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgresql>

This is a prisma setup guide for relational database in an existing project.

- **Prisma Client:** Auto-generated and type-safe database client for use in your application.
- **Prisma Migrate:** A declarative data modeling and migration tool.

## Setting Up Prisma For Next.js Project

```bash
npm install prisma --save-dev
```

Install Prisma and save it as a dev dependency with the `--save-dev` flag.

This command do the same install prisma as a dev Dependency.

### Install Prisma Client

```bash
npm install @prisma/client
```

### For MySQL Database

```bash
npx prisma init --datasource-provider mysql
```

### For SQLite Database

```bash
npx prisma init --datasource-provider sqlite
```

### For Postgres Database

```bash
npx prisma init --datasource-provider postgresql
```

**Example env variable string:**

```txt
postgresql://USER:PASSWORD@HOST:PORT/DATABASE
```

```txt
postgresql://db_user:my_password@localhost:5432/new_db
```

**Postgresql** works at port `5432` and **MySQL** at `3306`.

Initialize Prisma in the project and set the database to SQLite, PostgreSQL for Postgres, and MySQL for MySQL.

### Creating Sample Prisma Models in `schema.prisma` file in Prisma folder

```ts
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}

model Todo {
  id        String   @id @default(uuid())
  title     String
  complete  Boolean
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Running Migration

```bash
npx prisma migrate dev
```

Migrate model changes into the database.

Or with a flag to provide the name:

```bash
npx prisma migrate dev --name initialize the user and post model
```

This command creates a new SQL migration file for the migration in the `prisma/migrations` directory and runs it against the database. The SQLite database file (`dev.db`) is created inside the `prisma` directory.

```bash
npx prisma studio
```

This command runs a local server at port 5555 ([PORT Link](http://localhost:5555)). Prisma Studio allows you to check the data in the database, see rows, columns, and add or update data.

```bash
npx prisma generate
```

Generate the Prisma client.

## Exploring How to Send Queries to Database using Prisma

To send queries to the database, create a TypeScript file to execute Prisma Client queries. Create a new TypeScript file in the `src` folder. For example, `db.ts`:

### db.ts

```ts
import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

export const prisma = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
```

On the application page, retrieve data. For example, in a file named `page.tsx`:

### page.tsx

```tsx
import prisma from "@/db";
import Link from "next/link";

interface Todo {
  title: string;
  id: string;
  complete: boolean;
}

function getTodos() {
  return prisma.todo.findMany();
}

export default async function Home() {
  let todos: Todo[] = await getTodos();

  return (
    <main>
      {todos.map((todo: Todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </main>
  );
}
```

## Reset a Database

```bash
npx prisma migrate reset
```

Prisma **PostgreSQL** docs: <https://www.prisma.io/docs/orm/overview/databases/postgresql>
