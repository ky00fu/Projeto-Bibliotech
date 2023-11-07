const express = require('express')
const router = express.Router()

const Usuarios = require('../controllers/usuarios')

router.get('/', Usuarios.teste)
router.get('/usuarios', Usuarios.listar)
router.post('/usuario', Usuarios.login)
router.put('/usuario', Usuarios.alterarDados)

module.exports = router