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
  data DATETIME,
  PRIMARY KEY (id)
);

-- Pré populando a tabela todo
INSERT INTO todo (name, description, data) VALUES 
	('Business Meeting', 'Business meeting with XPTO employees', '2023-09-06 04:04:04'),
	('Medical appointment', 'Tomorrow morning, Dr. Dohn Doe', '2023-09-07 02:02:02'),
	('Pvzinho b-day', 'yeee lets party hard baby', '2023-09-08 13:05:00');

