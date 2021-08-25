USE sakila;
DELIMITER //

CREATE PROCEDURE CheckClienteEmail(
	IN email_cliente VARCHAR(300),
	OUT resposta BOOL)
BEGIN
	SELECT active INTO resposta
    FROM sakila.customer AS C
    WHERE C.email = email_cliente;
END //

DELIMITER ;

CALL CheckClienteEmail('LINDA.WILLIAMS@sakilacustomer.org', @resposta);
SELECT @resposta;