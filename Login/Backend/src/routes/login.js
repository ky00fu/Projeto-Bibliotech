const express = require('express')
const router = express.Router()

const Login = require('../controllers/login')

router.get('/', (req, res) => { res.json("Sistema online").end() })
router.get('/usuarios', Login.listar)
router.post('/usuario', Login.logar)

module.exports = router