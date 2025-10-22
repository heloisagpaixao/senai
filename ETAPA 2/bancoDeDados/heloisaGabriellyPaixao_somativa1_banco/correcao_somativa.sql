CREATE DATABASE db_saber_e_cia_b;
USE db_saber_e_cia_b;

CREATE TABLE tbl_livro(
    isbn VARCHAR(20) PRIMARY KEY,
    titulo_livro VARCHAR(200) NOT NULL,
    ano_publicacao YEAR NOT NULL,
    editora VARCHAR(200) NOT NULL
);

INSERT INTO tbl_livro(isbn, titulo_livro, ano_publicacao, editora)
    VALUES ('01938T32781904','Java - Como programar.', '2000', 'SENAI'),
           ('987654321','Java - Como programar 2', '2010', 'SENAI'),
           ('978-85-325-3078-3', 'Harry Potter e a Pedra Filosofal', 1997, 'Rocco'),
           ('978-85-7126-061-0', 'Dom Casmurro', 1899, 'Editora Clássica');

SELECT * FROM tbl_livro;

CREATE TABLE tbl_autor(
    id_autor INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome_autor VARCHAR(200) NOT NULL,
    nacionalidade VARCHAR(200) NOT NULL
);

INSERT INTO tbl_autor(nome_autor, nacionalidade)
    VALUES ('Daniel Manoel','Brasileiro'),
		('Machado de Assis', 'Brasileiro'),
            ('J.K. Rowling', 'Britânica');

SELECT nome_autor, nacionalidade FROM tbl_autor;

UPDATE tbl_autor
SET nacionalidade = 'Brasileiro'
WHERE id_autor = 2;

UPDATE tbl_autor
SET nome_autor = 'J.K. Rowling (Joanne Rowling)',
		nacionalidade = 'Britânica (Reino Unido)'
WHERE id_autor = 3;

DELETE FROM tbl_autor
WHERE id_autor = 3;

SELECT * FROM tbl_autor;

CREATE TABLE tbl_autor_livro(
    isbn VARCHAR(20) NOT NULL,
    id_autor INTEGER NOT NULL,
   
    CONSTRAINT fk_isbn_tbl_autor_livro FOREIGN KEY (isbn)
        REFERENCES tbl_livro(isbn),
   
    CONSTRAINT fk_id_autor_tbl_autor_livro FOREIGN KEY (id_autor)
        REFERENCES tbl_autor(id_autor)
);

CREATE TABLE tbl_exemplar(
    id_exemplar INTEGER PRIMARY KEY,
    status_exemplar VARCHAR(16) NOT NULL,
    isbn VARCHAR(16) NOT NULL,
   
    CONSTRAINT fk_isbn_tbl_exemplar FOREIGN KEY (isbn)
        REFERENCES tbl_livro(isbn)
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

INSERT INTO tbl_emprestimo (data_emprestimo, data_devolucao, data_devolucao_efetiva)
VALUES ('12/09/2025', '19/09/2025', '15/09/2025');
SELECT * FROM tbl_emprestimo;

CREATE TABLE tbl_membro(
    id_membro INTEGER PRIMARY KEY,
    nome_membro VARCHAR(200) NOT NULL,
    endereco VARCHAR(200) NOT NULL,
    telefone VARCHAR(16) NOT NULL
);

INSERT INTO tbl_membro(id_membro, nome_membro, endereco, telefone)
VALUES (101, 'Ana Silva', 'Rua A, 123', '11-98765-4321'),
(102, 'Bruno Costa', 'Av. B, 456', '11-91234-5678'),
(103, 'Carla Dias', 'Praça C, 789', '11-95555-4444');

SELECT * FROM tbl_membro;

CREATE USER 'estagiario'@'localhost' IDENTIFIED BY 'Mudar123';
GRANT ALTER ON db_saber_e_cia_b.tbl_livro TO 'estagiario'@'localhost';
ALTER TABLE tbl_livro ADD COLUMN genero VARCHAR(50);

DROP DATABASE db_saber_e_cia_b;