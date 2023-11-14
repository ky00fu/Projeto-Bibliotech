const express = require("express");
const router = express.Router();



const Cliente = require('../controllers/cliente');
router.post('/cliente/registro', Cliente.criar);
router.post('/cliente', Cliente.logar);
router.get('/cliente', Cliente.listar);



const Adm = require('../controllers/adm');
router.post('/adm', Adm.logar);
router.get('/adm', Adm.listar);



const Emprestimo = require('../controllers/emprestimo');
router.post('/emprestimo', Emprestimo.criar);
router.get('/emprestimo', Emprestimo.listar);
router.get('/emprestimo/:id_cliente', Emprestimo.listar);
router.patch('/emprestimo/:id', Emprestimo.alterar);
router.delete('/emprestimo/:id', Emprestimo.excluir);



module.exports = router