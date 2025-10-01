CREATE DATABASE db_blog_b;
USE db_blog_b;

CREATE TABLE tbl_autores (
	id_autor INT PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	username VARCHAR(100),
	dt_nascimento DATE NOT NULL,
	email VARCHAR(100) NOT NULL
);

CREATE TABLE tbl_postagens (
	id_postagem INT PRIMARY KEY,
	id_autor INT,
	id_comentarios INT,
	dt_de_postagem DATE,
	conteudo VARCHAR(100) NOT NULL
);

CREATE TABLE tbl_comentarios (
	id_comentario INT PRIMARY KEY,
	id_postagem INT,
	id_autor INT,
	dt_do_comentario DATE,
	dt_edicao_comentario DATE
);