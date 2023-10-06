const con = require('../dao/connect')
const Adm = require('../models/adm.js')

const listar = (req, res) => {
    let adm = new Adm(req.params)
    con.query(adm.read(), (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}

module.exports = {
    listar
}