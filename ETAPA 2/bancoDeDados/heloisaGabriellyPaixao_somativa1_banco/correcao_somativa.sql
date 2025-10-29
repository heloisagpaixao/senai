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