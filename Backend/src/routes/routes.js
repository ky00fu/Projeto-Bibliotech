const express = require("express");
const router = express.Router();

const Cliente = require('../controllers/cliente');

router.post('/cliente/registro', Cliente.criar);
router.get('/cliente/listar', Cliente.listar);
router.get('/cliente/listar/:id', Cliente.listar);

const Adm = require('../controllers/adm');

router.get('/adm/listar', Adm.listar);

module.exports = router