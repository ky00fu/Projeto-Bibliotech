const con = require('../dao/connect')
const Cliente = require('../models/cliente')

const criar = (req, res) => {
    let cliente = new Cliente(req.body)
    con.query(cliente.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    let cliente = new Cliente(req.params)
    con.query(cliente.read(), (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}

const logar = (req, res) => {
    let cliente = new Cliente(req.body)

    con.query(cliente.entrar(), (err, result) => {
        if (err == null) {
            if (result.length > 0) {
                res.status(202).json(result).end()
            } else {
                res.status(404).json(result).end()
            }
        } else {
            res.status(500).json("Banco de dados não respondeu").end()
        }
    })
}

module.exports = {
    criar,
    listar,
    logar
}