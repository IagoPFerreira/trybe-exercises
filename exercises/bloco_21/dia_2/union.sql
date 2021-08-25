(SELECT first_name, last_name, '-' AS 'customer_id' FROM sakila.actor)
UNION
(SELECT first_name, last_name, customer_id FROM sakila.customer)
ORDER BY first_name;

(SELECT first_name, last_name FROM sakila.actor)
UNION ALL
(SELECT first_name, last_name FROM sakila.staff)
ORDER BY first_name;

(SELECT first_name, last_name FROM sakila.actor WHERE first_name LIKE '%je%')
UNION
(SELECT first_name, last_name FROM sakila.customer WHERE first_name LIKE '%tracy%')
ORDER BY first_name;