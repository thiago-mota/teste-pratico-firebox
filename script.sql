-- Excluindo o database caso ele já exista e criando-o logo em seguida
DROP DATABASE IF EXISTS todolistdb;
CREATE DATABASE todolistdb;

-- Usando o banco todolistdb
USE todolistdb;

-- Excluindo as tabelas se as mesmas existirem
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS todo;

-- Criando a tabela users
CREATE TABLE IF NOT EXISTS users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(100),
  email VARCHAR(100),
  PRIMARY KEY (id)
);

-- Criando a tabela todo
CREATE TABLE IF NOT EXISTS todo (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(100),
  description VARCHAR(200),
  data DATETIME,
  PRIMARY KEY (id)
);

-- Pré populando a tabela users
INSERT INTO users (name, email) VALUES 
	('admin', 'admin@admin.com'),
  ('user', 'user@user.com');


-- Pré populando a tabela todo
INSERT INTO todo (name, description, data) VALUES 
	('to-do task 1', 'this is the first task', '2023-09-05 18:41:35');
