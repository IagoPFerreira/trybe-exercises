USE sakila;
SELECT * FROM film
WHERE title LIKE '%ace%';

SELECT * FROM film
WHERE `description` LIKE '%china';

SELECT * FROM film
WHERE `description` LIKE '%girl%' AND title LIKE '%lord';

SELECT * FROM film
WHERE title LIKE '___gon%' AND `description` LIKE '%Documentary%';