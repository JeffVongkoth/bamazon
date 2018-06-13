DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(256) NULL,
    department_name VARCHAR(256) NULL,
    price DECIMAL(10,4) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
    );

'stroller', 'sword', 'car wash soap', 'toilet paper', 'AA battery', 'white t-shirt',
'pencils', 'tooth brush', 'RC car', 'Tablet'
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('stroller', 'children', 100.50, 100000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('sword', 'ninjaware', 177.66, 23000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('car wash soap', 'automotive', 5.32, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('toilet paper', 'bathroom', 1.99, 58556);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('AA battery', 'batteries', 1.00, 1000000);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('white t-shirts', 'clothing', 20.11, 546);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('pencils', 'misc', .10, 5000000);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('tooth brush', 'bathroom', 2.00, 787875578);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('RC car', 'hobby', 900.00, 152522);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('tablet', 'electronics', 600.00, 80000);