const con = require('../dao/connect')
const Usuario = require('../models/usuario')

function formatarJSON(l) {
    const lista = []

    l.forEach(e => {
        lista.push(new Usuario(e))
    })

    return lista
}

const teste = (req, res) => {
    res.json("Sistema online").end()
}

const listar = (req, res) => {
    let usuario = new Usuario(req.params)

    con.query(usuario.read(), (err, result) => {
        if (err == null) {
            res.json(formatarJSON(result)).end()
        }
    })
}

const login = (req, res) => {
    let usuario = new Usuario(req.body)

    con.query(usuario.login(), (err, result) => {
        if (err == null) {
            if (result.length > 0) {
                res.status(202).json(formatarJSON(result)).end()
            } else {
                res.status(404).json("Usuário não encontrado").end()
            }
        } else {
            res.status(500).json("Banco de dados não respondeu").end()
            console.log(result)
        }
    })

}

const alterarDados = (req, res) => {
    let usuario = new Usuario(req.body)

    con.query(usuario.update(), (err, result) => {        
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' }).end();
            return;
        }
        
        if (result.affectedRows > 0) {
            res.json(result).end();
        } else {
            res.status(404).json({ error: 'Usuário não encontrado' }).end();
        }
        
    })
}

module.exports = { teste, listar, login, alterarDados }