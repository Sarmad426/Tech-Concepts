# Prisma

<p>Prisma is a next-generation <strong>ORM</strong> that makes working with databases easy for application 
developers and features the following tools: Prisma Client: Auto-generated and type-safe 
database client for use in your application. Prisma Migrate: A declarative data modeling 
and migration tool.</p>

## Setting Up Prisma For Next js Project

```npm
npm install prisma --save-dev
```
> <p>Install Prisma and save it as dev dependency with  <strong>--save-dev</strong> flag.</p>

### For MySql Database

```npm
npx prisma init --datasource-provider mysql
```
### For Sqlite Database

```npm
npx prisma init --datasource-provider sqlite
```
### For Postgres Database

```
npx prisma init --datasource-provider postgresql
```

> <p>Initialize Prisma in the project and setting the database to sqlite.
> <strong>postgresql</strong> for <strong>Postgres</strong> and <strong>mysql</strong> for <strong>MYSQL</strong>.</p>

### Creating Sample Prisma Models in schema.prisma file in Prisma folder

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

> <p>Migrating the model changes into the database.</p>

> Or with Flag to provide the name

```pip
npx prisma migrate dev --name initialize the user and post model
```

This command did two things:

> - It creates a new SQL migration file for this migration in the prisma/migrations directory.
> - It runs the SQL migration file against the database.

Because the SQLite database file didn't exist before, the command also created it inside the prisma directory with the name dev.db as defined via the environment variable in the .env file.

```npm
npx prisma studio
```

  > This command runs a local server at port 5555 [PORT Link](http://localhost:5555). <br>
  > Prisma Studio Allows you to Check the data in the database.See rows columns add or update data.

```npm
npm install @prisma/client
```

  > <p>This command Installs prisma client.</p>

```npm
npx prisma generate
```

> <p>This Command Generates the prisma client.</p>

## Exploring How to send queries to database using prisma

To send queries to the database, you will need a TypeScript file to execute your Prisma
Client queries. Create a new <strong>Typescript</strong> file in src folder.
Paste this code in it. In this case we create a db.ts file in src folder.

#### db.ts

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

### On Application Page. Retrieve Data

> In this Example we are retrieving todo model from our database.

#### page.tsx

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
        { todos.map((todo: Todo) => {
          return (
            <div key={todo.id}>
            {todo.title}
            </div>
          )
        })
      )}
    </main>
  );
}
```

## Reset a Database

```npx
npx prisma migrate reset
```
