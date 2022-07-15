-- Add your code below and execute file in MySQL Shell --
SELECT book_name, price FROM favorite_books
INNER JOIN book_prices
ON favorite_books.book_price = book_prices.id;
