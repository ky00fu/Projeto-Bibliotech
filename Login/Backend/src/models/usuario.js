class Usuario {
    endereco = {}

    constructor(obj) {
        this.id = obj.id
        this.nome = obj.nome
        this.cpf = obj.cpf
        this.email = obj.email
        this.senha = obj.senha
        this.nascimento = obj.nascimento
        this.endereco.cep = obj.cep
        this.endereco.numero = obj.numero
        this.endereco.complemento = obj.complemento
        this.telefone = obj.telefone
    }

    read() {
        return `SELECT * FROM usuarios`
    }

    login() {
        return `SELECT * FROM usuarios WHERE email = '${this.email}' AND senha = PASSWORD('${this.senha}')`
    }
    
    update() {
        return `UPDATE usuarios SET nome = '${this.nome}', cpf = '${this.cpf}', email = '${this.email}', senha = PASSWORD('${this.senha}'), nascimento = '${this.nascimento}', cep = '${this.endereco.cep}', numero = ${this.endereco.numero}, complemento = '${this.endereco.complemento}' WHERE id = ${this.id}`
    }
}

module.exports = Usuario