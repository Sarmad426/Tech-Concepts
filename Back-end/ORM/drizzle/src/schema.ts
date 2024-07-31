import {
    integer,
    pgTable,
    pgEnum,
    varchar,
    uniqueIndex,
    boolean,
    uuid,
    real,
    timestamp,
    primaryKey,
    serial,
} from "drizzle-orm/pg-core";

export const userRole = pgEnum("userRole", ["ADMIN", "USER"]);

export const UserTable = pgTable(
    "user",
    {
        id: uuid("id").primaryKey(),
        name: varchar("name", { length: 255 }).notNull(),
        age: integer("age").$type<18 | 60>().notNull(),
        email: varchar("email", { length: 255 }).notNull(),
        role: userRole("userRole").default("USER").notNull(),
    },
    // Created email as query index for fast querying
    (table) => {
        return {
            emailIndex: uniqueIndex("emailIndex").on(table.email),
        };
    }
);

// One to One relationship
export const UserPreferencesTable = pgTable("UserPreferences", {
    id: uuid("id").primaryKey(),
    emailUpdates: boolean("emailUpdates").default(false).notNull(),
    userId: uuid("userId")
        .references(() => UserTable.id)
        .notNull(),
});

// One to many relationship

export const PostsTable = pgTable("Posts", {
    id: uuid("id").primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    rating: real("rating").default(0).notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
    authorId: uuid("userId")
        .references(() => UserTable.id)
        .notNull(),
});

// Many to Many relationship

export const CategoryTable = pgTable("Category", {
    id: uuid("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
});

export const PostCategoryTable = pgTable(
    "PostCategory",
    {
        postId: uuid("postId").references(() => PostsTable.id).notNull(),
        categoryId: uuid("categoryId").references(() => CategoryTable.id).notNull(),
    },
    // Created a composite primary key
    (table) => {
        return {
            pk: primaryKey({ columns: [table.postId, table.categoryId] }),
        };
    }
);
