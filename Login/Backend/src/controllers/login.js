const con = require('../dao/connect')
const Login = require('../models/login')

function formatar(l) {
    const lista = []

    l.forEach(e => {
        lista.push(new Login(e))
    });

    return lista
}

const listar = (req, res) => {
    let login = new Login(req.params)

    con.query(login.read(), (err, result) => {
        if (err == null) {
            res.json(formatar(result)).end()
        }
    })
}

const logar = (req, res) => {
    let login = new Login(req.body)

    con.query(login.entrar(), (err, result) => {
        if (err == null) {
            if (result.length > 0) {
                res.status(202).json(formatar(result)).end()
            } else {
                res.status(404).json(formatar(result)).end()
            }
        } else {
            res.status(500).json("Banco de dados não respondeu").end()
        }
    })
}

module.exports = {
    listar,
    logar
}