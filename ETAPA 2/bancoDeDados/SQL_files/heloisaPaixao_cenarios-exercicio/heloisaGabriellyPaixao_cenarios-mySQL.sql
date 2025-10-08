create user 'secretaria'@'localhost' IDENTIFIED BY 'Escola@Sec1';
create user 'professor'@'localhost' IDENTIFIED BY 'Escola@Prof2';
create database db_escola_b;
use db_escola_b;

create table tbl_alunos (
	id_aluno INT,
	nome VARCHAR(100),
	data_nascimento DATE,
    media_final DECIMAL(4,2)
);

grant all privileges on db_escola_b.tbl_alunos to 'secretaria'@'localhost';
grant select on db_escola_b.tbl_alunos to 'professor'@'localhost';
grant update, select on db_escola_b.tbl_alunos to 'professor'@'localhost';
revoke all privileges on db_escola_b.tbl_alunos from 'secretaria'@'localhost';

drop user 'secretaria'@'localhost';
drop user 'professor'@'localhost';

use db_biblioteca_b;
drop table tbl_livros;