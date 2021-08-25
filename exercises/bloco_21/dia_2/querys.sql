SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

USE sakila;

SELECT a.actor_id, a.first_name
FROM actor AS a
INNER JOIN film_actor AS f
ON a.actor_id = f.film_id;

SELECT s.first_name, s.last_name, a.address
FROM staff AS s
INNER JOIN address AS a
ON s.address_id = a.address_id;


SELECT c.customer_id, c.first_name, c.email, c.address_id, a.address 
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
ORDER BY c.first_name ASC
LIMIT 100;

SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California'
AND c.first_name LIKE '%rene%';

SELECT c.first_name, a.address
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
WHERE c.active = 1
ORDER BY first_name DESC;

SELECT * FROM address;
SELECT * FROM customer;

SELECT
    c.customer_id,
    c.first_name,
    a.actor_id,
    a.first_name
FROM customer AS c
LEFT JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
RIGHT JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
INNER JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;