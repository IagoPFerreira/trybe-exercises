-- SELECT* FROM sakila.payment;

USE sakila;
DELIMITER $$

CREATE FUNCTION QuantidadeTotalDePagamentos(customer_param INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE quantidade_total INT;
    SELECT COUNT(*)
    FROM sakila.payment
    WHERE customer_id = customer_param INTO quantidade_total;
    RETURN quantidade_total;
END $$

DELIMITER ;

SELECT QuantidadeTotalDePagamentos(1)