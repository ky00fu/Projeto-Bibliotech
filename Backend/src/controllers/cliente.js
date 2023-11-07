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

module.exports = {
    criar,
    listar
}