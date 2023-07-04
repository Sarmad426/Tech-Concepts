# <b>SQL</b>

> <p> SQL stands for <b>Structured Query Language.</b> 
> It is a very powerful relational database query language. It is not a Case Sensitive Language.
> In Relational database data is stored in the form of tables, where
> each row is called a <b>record</b> and a column is called a <b>Field.</b>
>  </p>

## Create a Table

```sql
CREATE TABLE "customers" (
	"id"	INTEGER NOT NULL UNIQUE,
	"name"	TEXT NOT NULL,
	"points"	INTEGER NOT NULL,
	"birth_date"	TEXT NOT NULL,
	"state"	TEXT NOT NULL,
	PRIMARY KEY("id")
);
```

## Insert Data into the Table

```sql
INSERT INTO customers
(name,points,birth_date,state)
VALUES
("Zulqarnain",870,'1999-09-13','FSD'),
("Abbas",790,'1994-06-18','LHR'),
("Nawaz",840,'1998-02-27','ISL'),
("Riaz",1180,'1990-10-12','KAR'),
("Babar",1480,'1993-08-14','MUL');
```

- id is not added because it is by default a unique constraint so it will be taken care by the database server itself.

## Retrieve data from database

```sql
SELECT * FROM customers
```

## Comments in SQL

> <p> 
> We use the double hyphen (--) to create a single line comment in sql.

</p>

```sql
-- This is a comment is SQL.

```

## Retrieve Data from Database Conditionally

```sql
SELECT * FROM customers WHERE id > 12;
```

## Retrieve Data as Columns From Database

```sql
SELECT id, name, points FROM customers;
```

## Updating the data

```sql
UPDATE customers
SET state = 'HYD'
WHERE id=1;


UPDATE customers
SET state = 'KAR'
WHERE id=2;

UPDATE customers
SET state = 'PES'
WHERE id=3;

```

## Deleting data

```sql
DELETE FROM customers
WHERE id = 4;

```

## Expressions upon column values

```sql
SELECT points, points + 30 FROM customers WHERE points <500;
```

## Expression as a Column Name (AS alias)

```sql
SELECT points, points + 30 AS "30 points Bonus" FROM customers WHERE points < 500;
```

![Alt text](<../Screenshots/sql alias snap.PNG>)

## OPERATORS

- ! Not operator
- != Not Equal Operator
- <> Not Equal Operator

## Operators Expression

```sql
SELECT * FROM customers WHERE points <> 500;
-- In this Case we are extracting values upon which
-- price is not equal to 500.
```

## Unique Data (DISTINCT alias)

- DISTINCT alias is used to filter unique results from the database.

```sql
SELECT DISTINCT state FROM customers
```

> In this case we will get the unique state. No Duplication in the results.

## AND, OR , NOT operator

- We combine multiple conditions using these Operators.

```sql
SELECT * FROM customers WHERE points > 500 AND birth_date < '2000-01-01' ;
```

```sql
SELECT * FROM customers WHERE points > 500 OR
birth_date < '2000-01-01' ;
```

```sql
SELECT * FROM customers WHERE NOT points > 500 AND  birth_date < '2000-01-01' ;
```

## BETWEEN Operator

```sql
SELECT * FROM customers WHERE points
BETWEEN 500 AND 1000;
```

> The BETWEEN Operator ranges the values. In this case it is filtering values that are in between 500 and 1000.This Expression is exactly equivalent to this Complex Expression.

```sql
SELECT * FROM customers WHERE points >=500 AND points<=1000;
```

## IN Operator

```sql
SELECT * FROM customers WHERE state IN ('KAR','LHR');
```

- This will list the results in which state is equal to
  KAR or LHR. This Expression is exactly equal to this one.

  ```sql
  SELECT * FROM customers WHERE
  state = 'KAR' OR state = 'LHR';
  ```
