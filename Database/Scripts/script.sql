DROP DATABASE IF EXISTS bibliotech;
CREATE DATABASE bibliotech;
USE bibliotech;

CREATE TABLE cliente(
    id INT NOT NULL AUTO_INCREMENT,
    nome TEXT NOT NULL,
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

DROP VIEW IF EXISTS admFront;
CREATE VIEW admFront AS
SELECT 
    e.id AS id_emprestimo,
    c.id AS id_cliente,
    c.nome,
    e.titulo,
    e.url,
    e.data_emprestimo,
    e.data_prevista,
    e.data_devolucao,
    e.valor,
    e.cobranca
FROM cliente c RIGHT JOIN emprestimo e
ON e.id_cliente = c.id;

SELECT * FROM admFront;

-- Inserir dados na tabela 'cliente'
INSERT INTO cliente (nome, email, senha) VALUES
    ('João Silva', 'joao@email.com', PASSWORD('senha123')),
    ('Maria Santos', 'maria@email.com', PASSWORD('senha456')),
    ('Carlos Ferreira', 'carlos@email.com', PASSWORD('senha789')),
    ('Ana Rodrigues', 'ana@email.com', PASSWORD('senhaabc')),
    ('Pedro Oliveira', 'pedro@email.com', PASSWORD('senhaxyz'));

-- Inserir dados na tabela 'administrador'
INSERT INTO administrador (email, senha) VALUES
    ('admin1@admin.com', PASSWORD('admin123')),
    ('admin2@admin.com', PASSWORD('admin456')),
    ('admin3@admin.com', PASSWORD('admin789'));

-- Inserir dados na tabela 'emprestimo'
-- Inserir mais dados na tabela 'emprestimo'
INSERT INTO emprestimo (id_cliente, titulo, url, autor, valor, cobranca, data_emprestimo, data_prevista, data_devolucao) VALUES
    (1, 'The Portrait of a Lady', 'https://www.generatormix.com/images/books/the-portrait-of-a-lady.jpg', 'Henry James', 22.00, NULL, '2023-06-20', '2023-07-20', NULL),
    (2, 'Vengeful', 'https://www.generatormix.com/images/books/vengeful.jpg', 'V.E. Schwab', 33.00, NULL, '2023-07-05', '2023-08-05', NULL),
    (3, 'Homegoing', 'https://www.generatormix.com/images/books/homegoing.jpg', 'Yaa Gyasi', 18.00, NULL, '2023-08-12', '2023-09-12', NULL),
    (4, 'Black Leopard, Red Wolf', 'https://www.generatormix.com/images/books/black-leopard,-red-wolf.jpg', 'Marlon James', 40.00, NULL, '2023-09-10', '2023-10-10', NULL),
    (5, 'The Wedding Date', 'https://www.generatormix.com/images/books/the-wedding-date.jpg', 'Jasmine Guillory', 27.00, NULL, '2023-10-15', '2023-11-15', NULL),
    (1, "Midnight's Children", "https://www.generatormix.com/images/books/midnight's-children.jpg", 'Salman Rushdie', 29.00, NULL, '2023-11-20', '2023-12-20', NULL),
    (2, 'The River', 'https://www.generatormix.com/images/books/the-river.jpg', 'Peter Heller', 38.00, NULL, '2023-12-01', '2024-01-01', NULL),
    (3, 'Lincoln in the Bardo', 'https://www.generatormix.com/images/books/lincoln-in-the-bardo.jpg', 'George Saunders', 21.00, NULL, '2024-01-10', '2024-02-10', NULL),
    (4, 'Two Kinds of Truth', 'https://www.generatormix.com/images/books/two-kinds-of-truth.jpg', 'Michael Connelly', 45.00, NULL, '2024-02-15', '2024-03-15', NULL),
    (5, "All the King's Men", "https://www.generatormix.com/images/books/all-the-king's-men.jpg", 'Robert Penn Warren', 32.00, NULL, '2024-03-20', '2024-04-20', NULL),
    (1, 'The Seven Deaths of Evelyn Hardcastle', 'https://www.generatormix.com/images/books/the-seven-deaths-of-evelyn-hardcastle.jpg', 'Stuart Turton', 26.00, NULL, '2024-04-05', '2024-05-05', NULL),
    (2, 'The Prince of Tides', 'https://www.generatormix.com/images/books/the-prince-of-tides.jpg', 'Pat Conroy', 37.00, NULL, '2024-05-12', '2024-06-12', NULL),
    (3, 'My Not So Perfect Life', 'https://www.generatormix.com/images/books/my-not-so-perfect-life.jpg', 'Sophie Kinsella', 19.00, NULL, '2024-06-20', '2024-07-20', NULL),
    (4, 'How Not to Die Alone', 'https://www.generatormix.com/images/books/how-not-to-die-alone.jpg', 'Richard Roper', 42.00, NULL, '2024-07-01', '2024-08-01', NULL),
    (5, 'Love and Ruin', 'https://www.generatormix.com/images/books/love-and-ruin.jpg', 'Paula McLain', 30.00, NULL, '2024-08-10', '2024-09-10', NULL),
    (1, 'The Shape of Water', 'https://www.generatormix.com/images/books/the-shape-of-water.jpg', 'Guillermo del Toro', 24.00, NULL, '2024-09-15', '2024-10-15', NULL),
    (2, 'Sleeping Giants', 'https://www.generatormix.com/images/books/sleeping-giants.jpg', 'Sylvain Neuvel', 36.00, NULL, '2024-10-20', '2024-11-20', NULL),
    (3, 'Tender Is the Night', 'https://www.generatormix.com/images/books/tender-is-the-night.jpg', 'F. Scott Fitzgerald', 17.00, NULL, '2024-11-05', '2024-12-05', NULL),
    (4, 'Lost Roses', 'https://www.generatormix.com/images/books/lost-roses.jpg', 'Martha Hall Kelly', 48.00, NULL, '2024-12-12', '2025-01-12', NULL),
    (5, 'The Crossing', 'https://www.generatormix.com/images/books/the-crossing.jpg', 'Michael Connelly', 31.00, NULL, '2025-01-20', '2025-02-20', NULL);