# Prisma

Prisma is a next-generation **ORM** that simplifies working with databases for application developers. It includes the following tools:

- **Prisma Client:** Auto-generated and type-safe database client for use in your application.
- **Prisma Migrate:** A declarative data modeling and migration tool.

## Setting Up Prisma For Next.js Project

```npm
npm install prisma --save-dev
```

### Install Prisma Client.

```npm
npm install @prisma/client
```

Install Prisma and save it as a dev dependency with the `--save-dev` flag.

### For MySQL Database

```npm
npx prisma init --datasource-provider mysql
```

### For SQLite Database

```npm
npx prisma init --datasource-provider sqlite
```

### For Postgres Database

```npm
npx prisma init --datasource-provider postgresql
```

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

```npm
npx prisma migrate dev
```

Migrate model changes into the database.

Or with a flag to provide the name:

```npm
npx prisma migrate dev --name initialize the user and post model
```

This command creates a new SQL migration file for the migration in the `prisma/migrations` directory and runs it against the database. The SQLite database file (`dev.db`) is created inside the `prisma` directory.

```npm
npx prisma studio
```

This command runs a local server at port 5555 ([PORT Link](http://localhost:5555)). Prisma Studio allows you to check the data in the database, see rows, columns, and add or update data.

```npm
npx prisma generate
```

Generate the Prisma client.

## Exploring How to Send Queries to Database using Prisma

To send queries to the database, create a TypeScript file to execute Prisma Client queries. Create a new TypeScript file in the `src` folder. For example, `db.ts`:

### db.ts

```ts
import { PrismaClient } from "@prisma/client";

declare global {
  namespace NODEJS {
    interface Global {}
  }
}

interface CUSTOMNODEJSGLOBAL extends NODEJS.Global {
  prisma: PrismaClient;
}

declare const global: CUSTOMNODEJSGLOBAL;

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
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

```npx
npx prisma migrate reset
```
