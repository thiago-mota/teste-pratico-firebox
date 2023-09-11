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

-- Pré populando a tabela todo
INSERT INTO todo (name, description, data, status) VALUES 
	('Business Meeting', 'Business meeting with XPTO employees', '2023-09-06 04:04:04', true),
	('Medical appointment', 'Tomorrow morning, Dr. Dohn Doe', '2023-09-07 02:02:02', false),
	('Pvzinho b-day', 'yeee lets party hard baby', '2023-09-08 13:05:00', false);

