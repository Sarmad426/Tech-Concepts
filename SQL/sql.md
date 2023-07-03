# <b>SQL</b>

><p> SQL stands for <b>Structured Query Language.</b> 
> It is a very powerful relational database query language. It is not a Case Sensitive Language. </p>

# Create a Table

```sql
CREATE TABLE shoes (
  id INT PRIMARY KEY UNIQUE,
  brand VARCHAR(255),
  price INT,
  warranty_date DATE
);
```

# Insert into Table

```sql
INSERT INTO shoes (brand, price)
VALUES
  ('Nike', 100),
  ('Adidas', 80),
  ('Puma', 60),
  ('Reebok', 70),
  ('New Balance', 90);
```

# Retreive data from database

```sql
SELECT * FROM shoes
```
# Comments in SQL
> <p> 
> We use the double hyphen (--) to create a single line commnet in sql. 
</p>

``` sql
-- This is a comment is SQL.

```
# Retrieve Data from Database Conditionally

``` sql 
SELECT * FROM shoes WHERE id > 12;
```

# Retrieve Data as Columns From Database

``` sql 
SELECT id, brand, price FROM shoes;
```
# Adding More Data

```sql
INSERT INTO shoes (brand, price)
VALUES
  ('Vans', 65),
  ('Converse', 50),
  ('Under Armour', 120),
  ('Skechers', 75),
  ('ASICS', 95);

```

# Updating the data

```sql
UPDATE shoes
SET price = 110
WHERE id = 1;

UPDATE shoes
SET brand = 'Reebok'
WHERE id = 4;

```

# Deleting data

```sql
DELETE FROM shoes
WHERE id = 7;

```
# Expressions upon column values

``` sql
SELECT price, price*0.9 FROM shoes;
```

# Expression as a Column Name (AS alias)

``` sql
SELECT price, price*0.9 AS "10% OFF" FROM shoes;

```

# OPERATORS
- ! Not operator
- != Not Equal Operator
- <> Not Equal Operator 
  
# Operators Expression

``` sql 
SELECT * FROM shoes WHERE price <> 100;
-- In this Case we are extracting values upon which
-- price is not equal to 100.
```