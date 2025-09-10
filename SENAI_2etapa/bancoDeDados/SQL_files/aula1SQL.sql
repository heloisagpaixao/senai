create database db_biblioteca_b;
use db_biblioteca_b;

create table tbl_livros (
	id_livro INT,
    titulo VARCHAR(100),
    autor VARCHaR(100),
    ano_publicacao INT,
    preco DECIMAL(10, 2)
);

create index idx_titulo on tbl_livros (titulo);