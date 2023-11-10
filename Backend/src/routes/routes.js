const express = require("express");
const router = express.Router();



const Cliente = require('../controllers/cliente');
router.post('/cliente', Cliente.logar);
router.post('/cliente/registro', Cliente.criar);
router.get('/cliente/listar', Cliente.listar);



const Adm = require('../controllers/adm');
router.post('/adm', Adm.logar);
router.get('/adm/listar', Adm.listar);



const Emprestimo = require('../controllers/emprestimo');
router.post('/emprestimo/criar', Emprestimo.criar);
router.get('/emprestimo/listar', Emprestimo.listar);
router.get('/emprestimo/listar/:id_cliente', Emprestimo.listar);
router.patch('/emprestimo/alterar/:id', Emprestimo.alterar);
router.delete('/emprestimo/excluir/:id', Emprestimo.excluir);



module.exports = router