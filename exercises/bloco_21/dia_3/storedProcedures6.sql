USE sakila;
DELIMITER //

CREATE PROCEDURE MostraFilmePelaCaterogia(IN film_category VARCHAR(300))
BEGIN
	SELECT F.film_id, F.title, C.category_id, C.name
    FROM sakila.film as F
    INNER JOIN sakila.film_category AS FC ON FC.film_id = F.film_id
    INNER JOIN sakila.category AS C ON C.category_id = FC.category_id
    WHERE C.name = film_category;
END //

DELIMITER ;

CALL MostraFilmePelaCaterogia('Action');
