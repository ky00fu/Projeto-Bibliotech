const express = require("express");
const router = express.Router();

const Cliente = require('../controllers/cliente');

router.post('/cliente/registro', Cliente.criar);
router.get('/cliente/listar', Cliente.listar);
router.get('/cliente/listar/:id', Cliente.listar);

const Adm = require('../controllers/adm');

router.get('/adm/listar', Adm.listar);
// router.delete('/adm/del', Adm.excluir);
// router.post('/adm/logar', Adm.logar);

const Emprestimo = require('../controllers/emprestimo');

router.post('/emprestimo/criar', Emprestimo.criar);
router.get('/emprestimo/listar', Emprestimo.listar);
router.get('/emprestimo/listar/:id_cliente', Emprestimo.listar);
router.put('/emprestimo/alterar', Emprestimo.alterar);
router.delete('/emprestimo/excluir/:id', Emprestimo.excluir);

module.exports = router