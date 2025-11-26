CREATE DATABASE db_papelaria_b;
USE db_papelaria_b;

CREATE TABLE tbl_clientes(
    id_cliente INTEGER PRIMARY KEY,
    nome_completo VARCHAR(200) NOT NULL,
    telefone_contato VARCHAR(20) NOT NULL,
    cidade_mora VARCHAR(100) NOT NULL
);

CREATE TABLE tbl_produtos(
    id_produto INTEGER PRIMARY KEY,
    nome_produto VARCHAR(200) NOT NULL,
    preco_unitario DECIMAL(10,2) NOT NULL,
    qtd_estoque INTEGER NOT NULL
);

CREATE TABLE tbl_pedidos(
    id_pedido INTEGER PRIMARY KEY,
    id_cliente INTEGER NOT NULL,
    id_produto INTEGER NOT NULL,
    data_pedido DATE NOT NULL,
    qtd_itens_comprados INTEGER NOT NULL,
    dados_cancelamento VARCHAR(200),
    
    CONSTRAINT fk_cliente_tbl_pedidos FOREIGN KEY (id_cliente)
		REFERENCES tbl_clientes(id_cliente),
   
    CONSTRAINT fk_id_produto_tbl_pedidos FOREIGN KEY (id_produto)
		REFERENCES tbl_produtos(id_produto)
);

INSERT INTO tbl_clientes(id_cliente, nome_completo, telefone_contato, cidade_mora) 
VALUES (1, 'Heloísa Paixão','(11)95628-0223', 'Jundiaí'),
(2, 'Letícia Souto','(11)94101-6804', 'Indaituba'),
(3, 'Mônica Manfrinato','(11)98386-9737', 'Itu'),
(4, 'Paula Gianotto','(11)93212-7915', 'Salto'),
(5, 'Tiago Frós','(11)96739-0334', 'Jundiaí');
SELECT * FROM tbl_clientes;

INSERT INTO tbl_produtos(id_produto, nome_produto, preco_unitario, qtd_estoque) 
VALUES (1, 'Lápis de Colorir', 19.99, 10),
(2, 'Bloco de Folha Sulfite', 24.00, 4),
(3, 'Folha de Cartolina', 9.50, 7),
(4, 'Borracha', 2.25, 8),
(5, 'Kit de Canetas BIC', 10.00, 2);
SELECT * FROM tbl_produtos;

INSERT INTO tbl_pedidos(id_pedido, id_cliente, id_produto, data_pedido, qtd_itens_comprados, dados_cancelamento) 
VALUES (1, 2, 2, '2025-11-05', 4, 'Produto com defeito.'), 
(2, 5, 3, '2025-03-05', 2, 'Nenhum dado.'),
(3, 4, 1, '2025-10-17', 5, 'Nenhum dado.');
SELECT * FROM tbl_pedidos;

UPDATE tbl_produtos
SET preco_unitario = 35.00
WHERE id_produto = 2;

DELETE FROM tbl_clientes WHERE id_cliente = 3;
SELECT * FROM tbl_clientes;

SELECT * FROM tbl_produtos WHERE preco_unitario BETWEEN 10.00 AND 25.00;

SELECT * FROM tbl_clientes
WHERE nome_completo LIKE '%Silva' OR 'A%';

SELECT * FROM tbl_produtos WHERE qtd_estoque < 10 AND preco_unitario > 50.00;

SELECT * FROM tbl_clientes WHERE cidade_mora IN ('São Paulo', 'Rio de Janeiro');
SELECT * FROM tbl_clientes WHERE cidade_mora NOT IN ('São Paulo', 'Rio de Janeiro');

SELECT * FROM tbl_pedidos WHERE dados_cancelamento IS NULL;
SELECT * FROM tbl_pedidos WHERE dados_cancelamento IS NOT NULL;

SELECT CONCAT(UPPER(nome_completo), ' - ', telefone_contato)
AS Informação_Contato FROM tbl_clientes;

INSERT INTO tbl_pedidos (id_pedido, id_cliente, id_produto, data_pedido, qtd_itens_comprados, dados_cancelamento)
VALUES (4, 1, 4,curdate(), 1, "Produto com dano.");

SELECT id_pedido, data_pedido, DATEDIFF(CURDATE(), data_pedido) AS dias_desde_pedido
FROM tbl_pedidos WHERE id_pedido = 3;

SELECT COUNT(*) AS total_clientes
FROM tbl_clientes;

SELECT COUNT(*) AS superior_a_20
FROM tbl_produtos
WHERE preco_unitario > 20.00;

SELECT AVG(preco_unitario) AS preco_medio_produtos
FROM tbl_produtos;

SELECT MIN(preco_unitario) AS menor_valor_produto
FROM tbl_produtos;

SELECT MAX(preco_unitario) AS maior_valor_produto
FROM tbl_produtos;

SELECT SUM(preco_unitario * qtd_estoque) AS valor_em_estoque
FROM tbl_produtos;