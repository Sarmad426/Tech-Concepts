# SQLite

SQLite is a lightweight, serverless, self-contained, and open-source relational database management system. It is known for its simplicity and ease of integration, making it an excellent choice for embedded systems and mobile applications.

> This documentation focuses on SQLite.

## Table of Contents

- [SQLite](#sqlite)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Connecting to SQLite](#connecting-to-sqlite)
  - [Creating a Database](#creating-a-database)
  - [Creating Tables](#creating-tables)
  - [CRUD Operations](#crud-operations)
    - [Create (INSERT)](#create-insert)
    - [Read (SELECT)](#read-select)
    - [Update (UPDATE)](#update-update)
    - [Delete (DELETE)](#delete-delete)
  - [Searching Data](#searching-data)
  - [Indexes](#indexes)
  - [Joins](#joins)
  - [Transactions](#transactions)
  - [Backup and Restore](#backup-and-restore)
  - [Performance Optimization](#performance-optimization)
  - [Security](#security)
  - [Conclusion](#conclusion)

## Installation

SQLite is often included in programming languages like Python and can be easily installed. Refer to the official SQLite website for standalone installations: [SQLite Download](https://www.sqlite.org/download.html).

## Connecting to SQLite

Connect to SQLite using a SQLite client or through programming language interfaces. For example, in Python:

```python
import sqlite3

# Connect to a database (or create it if it doesn't exist)
conn = sqlite3.connect('your_database.db')

# Create a cursor object to execute SQL queries
cursor = conn.cursor()
```

## Creating a Database

SQLite creates a database file automatically when connecting. Specify the database name in the connection string.

## Creating Tables

Define tables within your database using the SQL `CREATE TABLE` statement. Example:

```sql
CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER,
    department TEXT
);
```

## CRUD Operations

### Create (INSERT)

Insert data into a table:

```sql
INSERT INTO employees (name, age, department) VALUES ('John Doe', 30, 'IT');
```

### Read (SELECT)

Retrieve data from a table:

```sql
SELECT * FROM employees;
```

### Update (UPDATE)

Update existing records:

```sql
UPDATE employees SET age = 31 WHERE name = 'John Doe';
```

### Delete (DELETE)

Remove records from a table:

```sql
DELETE FROM employees WHERE name = 'John Doe';
```

## Searching Data

Perform advanced searches using the `WHERE` clause:

```sql
SELECT * FROM employees WHERE department = 'IT' AND age > 25;
```

## Indexes

Improve query performance by creating indexes on columns:

```sql
CREATE INDEX idx_employees_name ON employees(name);
```

## Joins

SQLite supports basic joins:

```sql
SELECT employees.name, departments.department_name
FROM employees
JOIN departments ON employees.department_id = departments.department_id;
```

## Transactions

Ensure data consistency with transactions:

```sql
BEGIN;
-- SQL statements
COMMIT;
```

## Backup and Restore

SQLite databases are files, making backup and restore straightforward. Copy the database file for a backup and replace it for a restore.

## Performance Optimization

Optimize performance by analyzing and optimizing queries:

```sql
EXPLAIN QUERY PLAN SELECT * FROM employees WHERE age > 25;
```

## Security

SQLite databases are local files, so ensure proper file system permissions. Limit access to database files to authorized users.

## Conclusion

This documentation provides a basic guide to working with SQLite, covering essential operations, searching, indexing, and more. Explore the official SQLite documentation for in-depth details and advanced features: [SQLite Documentation](https://www.sqlite.org/docs.html).
