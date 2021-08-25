USE sakila;
DELIMITER $$

CREATE PROCEDURE Mostra10MaisPopulares()
BEGIN
	SELECT actor_id, COUNT(*) AS 'quantidade_filmes'
    FROM sakila.actor
    GROUP BY actor_id
    ORDER BY `quantidade_filmes` DESC
    LIMIT 10;
END $$

DELIMITER ;

CALL Mostra10MaisPopulares();