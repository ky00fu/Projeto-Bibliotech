const con = require('../dao/connect.js')
const Adm = require('../models/adm.js')

const listar = (req, res) => {
    let adm = new Adm(req.params)

    con.query(adm.read(), (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}

const logar = (req, res) => {
    let adm = new Adm(req.body)

    con.query(adm.entrar(), (err, result) => {
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
    listar,
    logar
}