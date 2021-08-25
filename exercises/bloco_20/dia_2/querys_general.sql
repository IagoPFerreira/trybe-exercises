USE sakila;
SELECT * FROM film;
SELECT title, release_year, rental_rate FROM film;
SELECT COUNT(title) FROM film;

SELECT * FROM actor;
SELECT DISTINCT(last_name) FROM actor;
SELECT * FROM actor
ORDER BY last_name ASC, first_name DESC;

SELECT * FROM language;
SELECT * from language
LIMIT 5 OFFSET 1;

SELECT * FROM film;
SELECT title, release_year, rental_duration, rental_rate, replacement_cost FROM film
ORDER BY rental_duration ASC, replacement_cost DESC
LIMIT 20;