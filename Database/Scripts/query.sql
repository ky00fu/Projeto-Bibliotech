DROP VIEW IF EXISTS admFront;
CREATE VIEW admFront AS
SELECT 
    e.id AS id_emprestimo,
    c.id AS id_cliente,
    c.nome,
    e.titulo,
    e.url,
    e.data_emprestimo,
    e.data_prevista,
    e.data_devolucao,
    e.valor,
    e.cobranca
FROM cliente c RIGHT JOIN emprestimo e
ON e.id_cliente = c.id;

SELECT * FROM admFront;