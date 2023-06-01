# Create a Table

```sql
CREATE TABLE shoes (
  id INT PRIMARY KEY,
  brand VARCHAR(255),
  price INT,
  warranty_date DATE
);
```

# Insert into Table

```sql
INSERT INTO shoes (id, brand, price)
VALUES
  (1, 'Nike', 100),
  (2, 'Adidas', 80),
  (3, 'Puma', 60),
  (4, 'Reebok', 70),
  (5, 'New Balance', 90);
```

# Retreive data from database

```sql
SELECT * FROM shoes
```

# Adding More Data

```sql
INSERT INTO shoes (id, brand, price)
VALUES
  (6, 'Vans', 65),
  (7, 'Converse', 50),
  (8, 'Under Armour', 120),
  (9, 'Skechers', 75),
  (10, 'ASICS', 95);

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
