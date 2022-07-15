-- Write your schema here --
CREATE TABLE products (
    id INT,
    product_name VARCHAR(30),
    category_name VARCHAR(100),
    price INT,
    in_stock BOOLEAN
);

CREATE TABLE categories (
    id INT,
    category_name VARCHAR(30)
);