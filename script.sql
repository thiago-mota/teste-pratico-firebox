-- Excluindo o database caso ele já exista e criando-o logo em seguida
DROP DATABASE IF EXISTS todolistdb;
CREATE DATABASE todolistdb;

-- Usando o banco todolistdb
USE todolistdb;

-- Excluindo as tabelas se as mesmas existirem
DROP TABLE IF EXISTS todo;

-- Criando a tabela todo
CREATE TABLE IF NOT EXISTS todo (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(100),
  description VARCHAR(200),
  data VARCHAR(200),
  status BOOLEAN,
  PRIMARY KEY (id)
);
