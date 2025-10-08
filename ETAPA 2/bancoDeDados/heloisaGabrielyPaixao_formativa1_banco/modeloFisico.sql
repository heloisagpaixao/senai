CREATE DATABASE db_plataforma_b;
USE db_plataforma_b;

CREATE TABLE tbl_alunos (
	id_aluno INT PRIMARY KEY,
	nome_completo VARCHAR(100) NOT NULL,
	dt_nascimento DATE NOT NULL,
	email VARCHAR(100) NOT NULL,
	cpf INT NOT NULL,
    id_matricula INT
);

CREATE TABLE tbl_instrutores (
	id_instrutor INT PRIMARY KEY,
	nome_completo VARCHAR(100) NOT NULL,
	certificados VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	biografia VARCHAR(100) NOT NULL,
    id_curso INT
);

CREATE TABLE tbl_cursos (
	id_curso INT PRIMARY KEY,
	id_aula INT,
	titulo VARCHAR(100) NOT NULL,
	carga_horaria_total TIME NOT NULL,
	nivel_dificuldade FLOAT NOT NULL
);

CREATE TABLE tbl_aulas (
	id_aula INT PRIMARY KEY,
	id_curso INT,
	ordem INT NOT NULL,
	titulo VARCHAR(100) NOT NULL,
	link VARCHAR(100) NOT NULL,
    id_instrutor INT
);

CREATE TABLE tbl_matriculas (
	id_matricula INT PRIMARY KEY,
	dt_matricula DATE,
	status_matricula VARCHAR(100) NOT NULL,
	id_aluno INT,
	id_curso INT
);


CREATE USER 'professor'@'localhost' IDENTIFIED BY 'Escola@Prof2';
GRANT SELECT ON db_escola_b.tbl_alunos TO 'professor'@'localhost';
REVOKE SELECT, UPDATE ON db_escola_b.tbl_alunos FROM 'professor'@'localhost';
ALTER TABLE tbl_alunos MODIFY COLUMN título VARCHAR(150);
