create database filme;

use filme;

# Criação da Tabela filme
create table tbl_filme(
cod_filme int(10) unsigned auto_increment primary key,
titulo varchar(500) not null,
genero varchar(50) not null,
lancamento date not null,
sinopse text not null
);
