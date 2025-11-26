CREATE DATABASE db_saber_e_cia_b;
USE db_saber_e_cia_b;

CREATE TABLE tbl_livro(
    isbn VARCHAR(16) PRIMARY KEY,
    titulo_livro VARCHAR(200) NOT NULL,
    ano_publicacao YEAR NOT NULL,
    editora VARCHAR(200) NOT NULL
);
SELECT * FROM tbl_livro;

CREATE TABLE tbl_autor(
    id_autor INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome_autor VARCHAR(200) NOT NULL,
    nacionalidade VARCHAR(200) NOT NULL
);

CREATE TABLE tbl_autor_livro(
    isbn VARCHAR(16) NOT NULL,
    id_autor INTEGER NOT NULL,
    CONSTRAINT fk_isbn_tbl_autor_livro FOREIGN KEY (isbn)
        REFERENCES tbl_livro(isbn),
   
    CONSTRAINT fk_id_autor_tbl_autor_livro FOREIGN KEY (id_autor)
        REFERENCES tbl_autor(id_autor)
);
SELECT * FROM tbl_autor_livro;

CREATE TABLE tbl_exemplar(
    id_exemplar INTEGER PRIMARY KEY,
    status_exemplar VARCHAR(16) NOT NULL,
    isbn VARCHAR(16) NOT NULL,
   
    CONSTRAINT fk_isbn_tbl_exemplar FOREIGN KEY (isbn)
        REFERENCES tbl_livro(isbn)
);

CREATE TABLE tbl_membro(
    id_membro INTEGER PRIMARY KEY,
    nome_membro VARCHAR(200) NOT NULL,
    endereco VARCHAR(200) NOT NULL,
    telefone VARCHAR(16) NOT NULL
);

CREATE TABLE tbl_emprestimo(
    id_emprestimo INTEGER PRIMARY KEY,
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE NOT NULL,
    data_devolucao_efetiva DATE,
    id_exemplar INTEGER NOT NULL,
    id_membro INTEGER NOT NULL,
   
    CONSTRAINT fk_id_exemplar_tbl_emprestimo FOREIGN KEY (id_exemplar)
        REFERENCES tbl_exemplar(id_exemplar),
       
    CONSTRAINT fk_id_membro_tbl_emprestimo FOREIGN KEY (id_membro)
        REFERENCES tbl_membro(id_membro)
);

INSERT INTO tbl_autor(nome_autor, nacionalidade) VALUES ('Machado de Assis','Brasileira');
INSERT INTO tbl_autor(nome_autor, nacionalidade) VALUES ('J.K Rowling','Britânica');

INSERT INTO tbl_autor(nome_autor, nacionalidade) 
VALUES ('Jenna Welch','Estadunidense'),
('Suzanne Collins','Estadunidense'),
('Tillie Cole','Britânica');

SELECT * FROM tbl_autor;

UPDATE tbl_autor SET nacionalidade = 'Brasileiro'
 WHERE id_autor = 1;

UPDATE tbl_autor SET nome_autor = 'J.K. Rowling (Joane Rowling)', nacionalidade = 'Britânica (Reino Unido)' WHERE id_autor = 2;

SELECT * FROM tbl_autor_livro;

DELETE FROM tbl_autor_livro
WHERE id_autor = 2;

DELETE FROM tbl_autor
WHERE id_autor = 2;

SELECT * FROM tbl_autor;

SELECT nome_autor, nacionalidade FROM tbl_autor;

SELECT * FROM tbl_autor WHERE id_autor = 1;

SELECT nome_autor, nacionalidade FROM tbl_autor WHERE nacionalidade = 'Brasileiro';

INSERT INTO tbl_membro (id_membro, nome_membro, endereco, telefone)
VALUES (101, 'Ana Silva', 'Rua A 123', '11 999999999'),
       (102, 'Bruno Costa', 'Avenida B 436', '11 8888888'),
       (103, 'Carlos Dias', 'Praca C 789', '11 777777777');
       
SELECT * FROM tbl_membro;

INSERT INTO tbl_livro (isbn, titulo_livro, ano_publicacao, editora)
VALUES ('978-85-325-3078-1', 'Harry Potter e a Pedra Filosofal', 1997, 'Rocco'),
       ('978-85-7126-061-2', 'Dom Casmurro', 1899, 'Editora Clássica');
       
INSERT INTO  tbl_livro (isbn, titulo_livro, ano_publicacao, editora)
VALUES ('978-140-595-531-7', 'Mil Beijos de Garoto', 2019, 'Editora Planeta'),
('978-054-542-511-7', 'Jogos Vorazes', 2008, 'Rocco'),
('123-456-789-101-1', 'Amor e Gelato', 2020, 'Intrínseca');


ALTER TABLE tbl_autor_livro DROP FOREIGN KEY fk_isbn_tbl_autor_livro;
ALTER TABLE tbl_exemplar DROP FOREIGN KEY fk_isbn_tbl_exemplar;

ALTER TABLE tbl_livro MODIFY isbn VARCHAR(17);
ALTER TABLE tbl_autor_livro MODIFY isbn VARCHAR(17);
ALTER TABLE tbl_exemplar MODIFY isbn VARCHAR(17);

ALTER TABLE tbl_autor_livro
ADD CONSTRAINT fk_isbn_tbl_autor_livro
FOREIGN KEY (isbn) REFERENCES tbl_livro(isbn);

ALTER TABLE tbl_exemplar
ADD CONSTRAINT fk_isbn_tbl_exemplar
FOREIGN KEY (isbn) REFERENCES tbl_livro(isbn);

UPDATE tbl_livro
SET ano_publicacao = 2019
WHERE isbn = '978-85-7126-061-0';

SELECT * FROM tbl_livro
WHERE ano_publicacao < 2000;

DELETE FROM tbl_membro
WHERE id_membro = 102;

SELECT nome_membro FROM tbl_membro;

SELECT titulo_livro, ano_publicacao, ano_publicacao +10 AS ano_revisao
    FROM tbl_livro;
   
SELECT * FROM tbl_livro
WHERE ano_publicacao = 2000;

SELECT * FROM tbl_livro
WHERE ano_publicacao > 2010
AND editora = 'Rocco';

SELECT * FROM tbl_membro
WHERE nome_membro = 'Ana Silva'
OR endereco = 'Praca C 789';

SELECT * FROM tbl_autor
WHERE NOT nacionalidade = 'Brasileiro'
AND NOT nacionalidade = 'Brasileira';

SELECT CONCAT(UPPER(nome_autor), '(', nacionalidade, ')')
AS etiqueta FROM tbl_autor;

SELECT ROUND(19.99*1.05,2);
SELECT FLOOR (19.99*1.05);
SELECT CEIL (19.99*1.05);

SELECT COUNT(*) AS total_membros
FROM tbl_membro;

SELECT COUNT(data_devolucao_efetiva) AS total_devolvidos
FROM tbl_emprestimo;

SELECT MIN(ano_publicacao) AS livro_mais_antigo
FROM tbl_livro;

SELECT MAX(ano_publicacao) AS livro_mais_novo
FROM tbl_livro;

INSERT INTO tbl_autor (nome_autor, nacionalidade)
VALUES ('Clarice Lispector', 'Brasileira'),
('George Orwell', 'Britânico'),
('Isaac Asimov', 'Russo-Americano');

INSERT INTO tbl_livro (isbn, titulo_livro, ano_publicacao, editora)
VALUES ('978-85-325-2306-8', 'A Revolução dos Bichos', 1945, 'Companhia das Letras'),
('978-0-00-711711-0', '1984', 1949, 'Penguin Books'),
('978-85-325-1997-9', 'Eu, Robô', 1950, 'Aleph');

SELECT * FROM tbl_membro
WHERE nome_membro LIKE '%Silva';

SELECT * FROM tbl_livro
WHERE ano_publicacao BETWEEN 1939 AND 1945;

SELECT * FROM tbl_livro
WHERE editora IN ('Rocco', 'Aleph');

SELECT * FROM tbl_livro
WHERE editora NOT IN ('Rocco', 'Aleph');

SELECT CONCAT(UPPER(nome_membro), ' -> (', telefone, ')')
AS membro_e_contato FROM tbl_membro;

SELECT COUNT(nacionalidade) AS total_brasileiros
FROM tbl_autor
WHERE nacionalidade IN ('Brasileiro', 'Brasileira');

SELECT MIN(ano_publicacao) AS menor_ano_publicacao
FROM tbl_livro
WHERE editora IN ('Aleph');

INSERT INTO tbl_exemplar(id_exemplar, status_exemplar, isbn)
VALUES (1, 'Livre', '978-85-325-2306-8');

INSERT INTO tbl_emprestimo (id_emprestimo, data_emprestimo, data_devolucao, data_devolucao_efetiva, id_exemplar, id_membro)
VALUES (501, CURDATE(), CURDATE() + INTERVAL 14 DAY, NULL, 1, 101);
SELECT * FROM tbl_emprestimo;

SELECT editora, COUNT(isbn) AS quantidade_livros
FROM tbl_livro
GROUP BY editora;

INSERT INTO tbl_livro (isbn, titulo_livro, ano_publicacao, editora)
VALUES ('999-987654-987', 'Esse é o meu livro', 2020, 'Rocco'),
('999-987654-988', 'Esse é o meu livro 2', 2022, 'Rocco'),
('999-987654-989', 'Esse é o meu livro 3', 2024, 'Rocco');

SELECT titulo_livro,
MAX(ano_publicacao) AS ano_publicacao,
editora
FROM tbl_livro
GROUP BY editora;

SELECT editora, COUNT(isbn) AS quantidade_livros
FROM tbl_livro
GROUP BY editora
HAVING COUNT(isbn) >= 2;

SELECT nome_autor AS nome, 'Autor' AS tipo
FROM tbl_autor
UNION
SELECT nome_membro AS nome, 'Membro' AS tipo
FROM tbl_membro;

SELECT L.titulo_livro, A.nome_autor
FROM tbl_livro L
CROSS JOIN tbl_autor A;

INSERT INTO tbl_autor_livro(isbn, id_autor) 
VALUE ('123-456-789-101-1', 3),
('978-0-00-711711-0', 7),
('978-054-542-511-7', 4),
('978-140-595-531-7', 5),
('978-85-325-1997-9', 8),
('978-85-325-2306-8', 7),
('978-85-325-3078-', 9),
('978-85-7126-061-', 1),
('999-987654-987', 6),
('999-987654-988', 6),
('999-987654-989', 6);

SELECT L.titulo_livro, AL.id_autor
FROM tbl_livro L
INNER JOIN tbl_autor_livro AL
ON L.isbn = AL.isbn;

SELECT L.titulo_livro, A.nome_autor
FROM tbl_livro L
INNER JOIN tbl_autor_livro AL
	ON L.isbn = AL.isbn
INNER JOIN tbl_autor A
	ON AL.id_autor = A.id_autor;
    
SELECT titulo_livro
FROM tbl_livro
WHERE isbn IN (
	SELECT isbn FROM tbl_autor_livro WHERE id_autor IN (
		SELECT id_autor FROM tbl_autor
		WHERE nacionalidade LIKE 'Brasileir_'
	)
);

SELECT nome_autor
FROM tbl_autor A
WHERE EXISTS (
	SELECT 1 FROM tbl_autor_livro AL
	WHERE AL.id_autor = A.id_autor
);

SELECT titulo_livro, ano_publicacao
FROM tbl_livro
WHERE ano_publicacao < ANY (
	SELECT ano_publicacao FROM tbl_livro
	WHERE editora = 'Aleph'
);

INSERT INTO tbl_autor (nome_autor, nacionalidade)
VALUES ('Frank Herbert', 'Americano');

INSERT INTO tbl_exemplar (id_exemplar, status_exemplar, isbn)
VALUES (101, 'Disponível', '999-987654-987'),
(102, 'Emprestado', '999-987654-987'),
(103, 'Disponível', '978-85-325-2306-8');

SELECT * FROM tbl_livro;

INSERT INTO tbl_emprestimo (id_emprestimo, data_emprestimo, data_devolucao, data_devolucao_efetiva, id_exemplar, id_membro)
VALUES (502, '2024-10-01', '2024-10-15', NULL, 102, 101);

SELECT isbn, COUNT(*) AS numero_de_copias
FROM tbl_exemplar
GROUP BY isbn;

SELECT M.nome_membro, L.titulo_livro, E.data_devolucao
FROM tbl_membro M
INNER JOIN tbl_emprestimo E ON
	M.id_membro = E.id_membro
    
INNER JOIN tbl_exemplar EX ON
	E.id_exemplar = EX.id_exemplar

INNER JOIN  tbl_livro L ON
	EX.isbn = L.isbn;
    
SELECT A.nome_autor, COUNT(AL.isbn) AS quantidade
FROM tbl_autor A
LEFT JOIN tbl_autor_livro AL ON
	A.id_autor = AL.id_autor
    GROUP BY A.nome_autor;
    
SELECT nome_membro FROM tbl_membro
WHERE id_membro IN (
	SELECT id_membro FROM tbl_emprestimo
    WHERE data_devolucao_efetiva IS NULL
	)
;

START TRANSACTION;
UPDATE tbl_membro SET telefone = '11-99999-0000'
WHERE id_membro = 101;
COMMIT;
SELECT * from tbl_membro;

START TRANSACTION;
INSERT INTO tbl_membro (id_membro, nome_membro, endereco, telefone)
VALUES (999, 'Membro Teste', 'Rua dos Sábias 22, Bairro dos Pássaros', '11-99998-0001');
SELECT * FROM tbl_membro;
/*O 'Membro Teste' existe aqui dentro da transação. */

ROLLBACK;
SELECT * FROM tbl_membro;
/*O 'Membro Teste' foi desfeito e nunca existiu. */

START TRANSACTION;
INSERT INTO tbl_membro (id_membro, nome_membro, endereco, telefone)
VALUES (900, 'Letícia Souto', 'Rua dos Papagaios', '11-11111-1111');
SAVEPOINT ponto_A;

INSERT INTO tbl_membro (id_membro, nome_membro, endereco, telefone)
VALUES (998, 'Mônica Cotrim', 'Rua das Lagartixas', '11-99998-0001');
SAVEPOINT ponto_B;

INSERT INTO tbl_membro (id_membro, nome_membro, endereco, telefone)
VALUES (997, 'Paula Sbrissa', 'Rua dos Cachorros', '11-99999-0000');

SELECT * FROM tbl_membro;

ROLLBACK TO SAVEPOINT ponto_A;
SELECT * FROM tbl_membro;

COMMIT;

CREATE VIEW V_Relatorio_Emprestimos AS
SELECT
	M.nome_membro,
    L.titulo_livro,
    E.data_emprestimo,
    E.data_devolucao
FROM tbl_membro M
JOIN tbl_emprestimo E ON M.id_membro = E.id_membro
JOIN tbl_exemplar EX ON E.id_exemplar = EX.id_exemplar
JOIN tbl_livro L ON EX.isbn =  L.isbn;

/* Em vez de escrever todo o JOIN, agora basta fazer: */
SELECT * FROM V_Relatorio_Emprestimos
WHERE nome_membro = 'Ana Silva';

/* DELIMITER é um comando do cliente MySQL para mudar o "fim" do comando. */
DELIMITER $$

CREATE PROCEDURE sp_novo_emprestimo (
	IN p_id_exemplar INT,
    IN p_id_membro INT
)
BEGIN
	INSERT INTO tbl_emprestimo (
    id_emprestimo,
    data_emprestimo,
    data_devolucao,
    data_devolucao_efetiva,
    id_exemplar,
    id_membro
)
VALUES (
	1000,
	CURDATE(),
    CURDATE() + INTERVAL 14 DAY, /* Prazo de 14 dias. */
    NULL,
    p_id_exemplar,
    p_id_membro
);

END$$
DELIMITER ;

CALL sp_novo_emprestimo (101, 101);

DROP PROCEDURE sp_novo_emprestimo;

DELIMITER $$

CREATE FUNCTION fn_status_membro (p_id_membro INT)
RETURNS VARCHAR(20)
DETERMINISTIC
BEGIN
	DECLARE v_atrasos INT;
    
    SELECT COUNT(*) INTO v_atrasos
    FROM tbl_emprestimo
    WHERE id_membro = p_id_membro
    AND data_devolucao < CURDATE()
    AND data_devolucao_efetiva IS NULL;
    
    IF v_atrasos > 0 THEN
		RETURN 'Com Atraso';
	ELSE
		RETURN 'Regular';
	END IF;
END$$

DELIMITER ;

/* Como usar: */
SELECT nome_membro, fn_status_membro(id_membro) FROM tbl_membro;