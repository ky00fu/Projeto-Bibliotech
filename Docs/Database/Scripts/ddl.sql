DROP DATABASE IF EXISTS bibliotech;
CREATE DATABASE bibliotech;
USE bibliotech;

CREATE TABLE cliente(
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    email TEXT NOT NULL,
    senha TEXT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE administrador(
    email TEXT NOT NULL,
    senha TEXT NOT NULL
);

CREATE TABLE emprestimo(
    id INT NOT NULL AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    titulo TEXT NOT NULL,
    url TEXT NOT NULL,
    autor VARCHAR(50) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    cobranca DECIMAL(10,2),
    data_emprestimo DATE,
    data_prevista DATE,
    data_devolucao DATE,
    PRIMARY KEY(id),
    FOREIGN KEY (id_cliente) REFERENCES cliente(id)
);

DESCRIBE cliente;
DESCRIBE administrador;
DESCRIBE emprestimo;