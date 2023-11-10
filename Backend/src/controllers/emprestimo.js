const con = require('../dao/connect')
const Emprestimo = require('../models/emprestimo')

const teste = (req, res) => {
    res.json('[Routes] working').end()
}

const criar = (req, res) => {
    let emprestimo = new Emprestimo(req.body)
    con.query(emprestimo.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    let emprestimo = new Emprestimo(req.params)
    con.query(emprestimo.read(), (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}

// const alterar = (req, res) => {
//     let emprestimo = new Emprestimo(req.body)
//     con.query(emprestimo.update(), (err, result) => {
//         if (result.affectedRows > 0)
//             res.status(202).end()
//         else
//             res.status(404).end()
//     })
// }

const alterar = (req, res) => {
    const id_emprestimo = req.params.id
    const updateData = req.body

    if (!id_emprestimo || Object.keys(updateData).length === 0) {
        return res.status(404).json({ error: 'Invalid request data' }).end()
    }

    let emprestimo = new Emprestimo({
        id: id_emprestimo,
        ...updateData
    })

    con.query(emprestimo.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).json(result).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let emprestimo = new Emprestimo(req.params)
    con.query(emprestimo.delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}

module.exports = {
    teste,
    criar,
    listar,
    alterar,
    excluir
}