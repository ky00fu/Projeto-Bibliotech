-- DDL
DROP DATABASE IF EXISTS usuarios;
CREATE DATABASE usuarios CHARSET=UTF8 COLLATE utf8_general_ci;
USE usuarios;

CREATE TABLE usuarios(
    id INT NOT NULL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    email TEXT NOT NULL,
    senha TEXT NOT NULL,
    nascimento DATETIME NOT NULL,
    cep VARCHAR(10) NOT NULL,
    numero INT,
    complemento TEXT,
    telefone VARCHAR(15)
);

-- DML
INSERT INTO usuarios VALUES
(123, "Passos Dias Aguiar", "123.456.789-01", "passos@email.com", PASSWORD("1234"), "2000-03-01", "13914-552", 2925, "BL16 AP14", "(19)99874-8789"),
(321, "Ana Aguiar", "987.654.321-99", "ana@email.com", PASSWORD("4321"), "1998-03-20", "13914-552", 2925, "BL16 AP15", "(19)99874-8789"),
(444, "João Silva", "897.564.003-09", "joao.silva@email.com", PASSWORD("1324"), "1997-12-20", "13914-552", 2900, null, null),
(521, "Maria Souza", "987.654.321-00", "maria.souza@email.com", PASSWORD("5678"), "1985-09-20", "54321-876", 789, null, "(22)12345-6789");