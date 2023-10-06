-- Inserir dados na tabela 'cliente'
INSERT INTO cliente (nome, email, senha) VALUES
    ('João Silva', 'joao@email.com', 'senha123'),
    ('Maria Santos', 'maria@email.com', 'senha456'),
    ('Carlos Ferreira', 'carlos@email.com', 'senha789'),
    ('Ana Rodrigues', 'ana@email.com', 'senhaabc'),
    ('Pedro Oliveira', 'pedro@email.com', 'senhaxyz');

-- Inserir dados na tabela 'administrador'
INSERT INTO administrador (email, senha) VALUES
    ('admin1@admin.com', 'admin123'),
    ('admin2@admin.com', 'admin456'),
    ('admin3@admin.com', 'admin789');

-- Inserir dados na tabela 'emprestimo'
-- Inserir mais dados na tabela 'emprestimo'
INSERT INTO emprestimo (id_cliente, titulo, url, autor, valor, cobranca, data_emprestimo, data_prevista, data_devolucao) VALUES
    (1, 'Livro F', 'www.livrof.com', 'Autor F', 22.00, NULL, '2023-06-20', '2023-07-20', NULL),
    (2, 'Livro G', 'www.livrog.com', 'Autor G', 33.00, NULL, '2023-07-05', '2023-08-05', NULL),
    (3, 'Livro H', 'www.livroh.com', 'Autor H', 18.00, NULL, '2023-08-12', '2023-09-12', NULL),
    (4, 'Livro I', 'www.livroi.com', 'Autor I', 40.00, NULL, '2023-09-10', '2023-10-10', NULL),
    (5, 'Livro J', 'www.livroj.com', 'Autor J', 27.00, NULL, '2023-10-15', '2023-11-15', NULL),
    (1, 'Livro K', 'www.livrok.com', 'Autor K', 29.00, NULL, '2023-11-20', '2023-12-20', NULL),
    (2, 'Livro L', 'www.livrol.com', 'Autor L', 38.00, NULL, '2023-12-01', '2024-01-01', NULL),
    (3, 'Livro M', 'www.livrom.com', 'Autor M', 21.00, NULL, '2024-01-10', '2024-02-10', NULL),
    (4, 'Livro N', 'www.livron.com', 'Autor N', 45.00, NULL, '2024-02-15', '2024-03-15', NULL),
    (5, 'Livro O', 'www.livroo.com', 'Autor O', 32.00, NULL, '2024-03-20', '2024-04-20', NULL),
    (1, 'Livro P', 'www.livrop.com', 'Autor P', 26.00, NULL, '2024-04-05', '2024-05-05', NULL),
    (2, 'Livro Q', 'www.livroq.com', 'Autor Q', 37.00, NULL, '2024-05-12', '2024-06-12', NULL),
    (3, 'Livro R', 'www.livror.com', 'Autor R', 19.00, NULL, '2024-06-20', '2024-07-20', NULL),
    (4, 'Livro S', 'www.livros.com', 'Autor S', 42.00, NULL, '2024-07-01', '2024-08-01', NULL),
    (5, 'Livro T', 'www.livrot.com', 'Autor T', 30.00, NULL, '2024-08-10', '2024-09-10', NULL),
    (1, 'Livro U', 'www.livrou.com', 'Autor U', 24.00, NULL, '2024-09-15', '2024-10-15', NULL),
    (2, 'Livro V', 'www.livrov.com', 'Autor V', 36.00, NULL, '2024-10-20', '2024-11-20', NULL),
    (3, 'Livro W', 'www.livrow.com', 'Autor W', 17.00, NULL, '2024-11-05', '2024-12-05', NULL),
    (4, 'Livro X', 'www.livrox.com', 'Autor X', 48.00, NULL, '2024-12-12', '2025-01-12', NULL),
    (5, 'Livro Y', 'www.livroy.com', 'Autor Y', 31.00, NULL, '2025-01-20', '2025-02-20', NULL);
