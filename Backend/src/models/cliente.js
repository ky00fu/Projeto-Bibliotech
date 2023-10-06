class Cliente {

    constructor(i) {
        this.nome = i.nome
        this.email = i.email
        this.senha = i.senha
    }

    create() {
        return `INSERT INTO cliente(nome, email, senha) VALUE('${this.nome}','${this.email}','${this.senha}')`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM cliente`
        else
            return `SELECT * FROM cliente WHERE id = ${this.id}`
    }
}

module.exports = Cliente