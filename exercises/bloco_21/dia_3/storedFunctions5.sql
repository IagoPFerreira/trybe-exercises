-- SELECT * FROM sakila.film;

USE sakila;
DELIMITER $$

CREATE FUNCTION RetornaDoFilme(id INT)
RETURNS VARCHAR(300) READS SQL DATA
BEGIN
	DECLARE film VARCHAR(300);
		SELECT title
        FROM sakila.film
        WHERE film_id = id INTO film;
		RETURN film;
END $$

DELIMITER ;

SELECT RetornaDoFilme(3);