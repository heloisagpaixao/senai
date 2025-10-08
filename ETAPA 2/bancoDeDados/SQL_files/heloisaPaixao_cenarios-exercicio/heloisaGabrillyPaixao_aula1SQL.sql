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

INSERT INTO tbl_livros (id_livro, titulo, autor, ano_publicacao, preco) VALUES
(1, 'Dom Casmurro', 'Machado de Assis', 1899, 39.90),
(2, 'O Alquimista', 'Paulo Coelho', 1988, 29.50),
(3, 'A Hora da Estrela', 'Clarice Lispector', 1977, 34.00);