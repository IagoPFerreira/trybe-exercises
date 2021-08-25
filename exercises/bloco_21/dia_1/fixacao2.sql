
SELECT * from sakila.film;

SELECT film_id, title, IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço esse filme')
AS 'conheço o filme?'
FROM sakila.film;

SELECT DATEDIFF('2021-07-23', '1996-04-13');