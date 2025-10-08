CREATE DATABASE db_bibliosomativa_b;
USE db_bibliosomativa_b;

CREATE TABLE tbl_livros (
	ISBN INT PRIMARY KEY,
	titulo VARCHAR(100) NOT NULL,
	ano_publicacao DATE NOT NULL,
	editora VARCHAR(100) NOT NULL
);

CREATE TABLE tbl_autores (
	id_autor INT PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	nacionalidade VARCHAR(100) NOT NULL
);

CREATE TABLE tbl_livrosAutores (
	id_livrosAutores INT PRIMARY KEY,
	ISBN INT NOT NULL,
	id_autor INT NOT NULL
);

CREATE TABLE tbl_exemplares (
	id_exemplar INT PRIMARY KEY,
	status_emprstimo VARCHAR(100) NOT NULL
);

CREATE TABLE tbl_membros (
	matricula INT PRIMARY KEY,
	nome_completo VARCHAR(100) NOT NULL,
	enedereco VARCHAR(100) NOT NULL,
	telefone VARCHAR(100) NOT NULL
);

CREATE TABLE tbl_emprestimos (
	id_emprestimo INT PRIMARY KEY,
	matricula INT NOT NULL,
	dt_emprestimo DATE NOT NULL,
	dt_prevista_devolucao DATE NOT NULL,
    dt_devolucao DATE NOT NULL,
    id_exemplar INT NOT NULL
);

CREATE USER 'estagiario'@'localhost' IDENTIFIED BY 'mudar123';
GRANT ALTER ON db_bibliosomativa_b.tbl_livros TO 'estagiario'@'localhost';
