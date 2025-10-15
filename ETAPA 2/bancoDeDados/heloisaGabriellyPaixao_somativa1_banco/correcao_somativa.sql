CREATE DATABASE db_saber_e_cia_b;

USE db_saber_e_cia_b;

CREATE TABLE tbl_livro(
    isbn VARCHAR(16) PRIMARY KEY,
    titulo_livro VARCHAR(200) NOT NULL,
    ano_publicacao YEAR NOT NULL,
    editora VARCHAR(200) NOT NULL
);

INSERT INTO tbl_livro(isbn, titulo_livro, ano_publicacao, editora)
    VALUES ('123456789','Java - Como programar.', '2000', 'SENAI'),
           ('987654321','Java - Como programar 2', '2010', 'SENAI');

CREATE TABLE tbl_autor(
    id_autor INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome_autor VARCHAR(200) NOT NULL,
    nacionalidade VARCHAR(200) NOT NULL
);

INSERT INTO tbl_autor(nome_autor, nacionalidade)
    VALUES ('Daniel Manoel','Brasileiro');
    
SELECT * FROM tbl_autor;

CREATE TABLE tbl_autor_livro(
    isbn VARCHAR(16) NOT NULL,
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

CREATE TABLE tbl_membro(
    id_membro INTEGER PRIMARY KEY,
    nome_membro VARCHAR(200) NOT NULL,
    endereco VARCHAR(200) NOT NULL,
    telefone VARCHAR(16) NOT NULL
);

INSERT INTO tbl_membro(nome_membro, endereco, telefone)
VALUES ('Heloísa Gabrielly Paixão', 'Sergio Zani, 30, Bela Vista', '11 95628-0221');

SELECT * FROM tbl_membro;

CREATE USER 'estagiario'@'localhost' IDENTIFIED BY 'Mudar123';
GRANT ALTER ON db_saber_e_cia_b.tbl_livro TO 'estagiario'@'localhost';
ALTER TABLE tbl_livro ADD COLUMN genero VARCHAR(50);
