import { relations } from "drizzle-orm";
import {
    integer,
    pgTable,
    pgEnum,
    varchar,
    uniqueIndex,
    boolean,
    serial,
    real,
    timestamp,
    primaryKey,
} from "drizzle-orm/pg-core";


export const UserRole = pgEnum("userRole", ["ADMIN", "USER"]);

export const UserTable = pgTable(
    "user",
    {
        id: serial("id").primaryKey(),
        name: varchar("name", { length: 255 }).notNull(),
        age: integer("age").notNull(),
        email: varchar("email", { length: 255 }).notNull(),
        role: UserRole("userRole").default("USER").notNull(),
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
    id: serial("id").primaryKey(),
    emailUpdates: boolean("emailUpdates").default(false).notNull(),
    userId: serial("userId")
        .references(() => UserTable.id)
        .notNull(),
});

// One to many relationship

export const PostsTable = pgTable("Posts", {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    rating: real("rating").default(0).notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
    authorId: serial("userId")
        .references(() => UserTable.id)
        .notNull(),
});

// Many to Many relationship

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
    // Created a composite primary key
    (table) => {
        return {
            pk: primaryKey({ columns: [table.postId, table.categoryId] }),
        };
    }
);

// Relations

export const UserTableRelations = relations(UserTable, ({ one, many }) => ({
    preferences: one(UserPreferencesTable),
    posts: many(PostsTable),
}),
);

export const UserPreferencesTableRelations = relations(UserPreferencesTable, ({ one }) => {
    return {
        user: one(UserTable, {
            fields: [UserPreferencesTable.userId],
            references: [UserTable.id]
        })
    }
})

export const PostTableRelations = relations(PostsTable, ({ one, many }) => {
    return {
        author: one(UserTable, {
            fields: [PostsTable.authorId],
            references: [UserTable.id]
        }),
        postCategories: many(PostCategoryTable)
    }
});

export const PostCategoryTableRelations = relations(PostCategoryTable, ({ one }) => {
    return {
        post: one(PostsTable, {
            fields: [PostCategoryTable.postId],
            references: [PostsTable.id],
        }),
        category: one(CategoryTable, {
            fields: [PostCategoryTable.categoryId],
            references: [CategoryTable.id]
        })
    }
})