USE sakila;

SELECT * FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT * FROM customer
WHERE active = 0 AND store_id = 2 AND first_name NOT LIKE 'KENNETH'
ORDER BY first_name ASC;

SELECT title, description, release_year, replacement_cost FROM film
WHERE rating <> 'NC-17' AND replacement_cost > 18.00
ORDER BY replacement_cost ASC, title ASC
LIMIT 100;

SELECT COUNT(*) FROM customer
WHERE store_id = 1;
