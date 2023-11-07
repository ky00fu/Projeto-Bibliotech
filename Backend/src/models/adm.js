class Adm {
    endereco = {}

    constructor(obj) {
        this.email = obj.email
        this.senha = obj.senha
    }

    read() {
            return `SELECT * FROM admFront`
    }

    // entrar() {
    //     return `SELECT * FROM administrador WHERE email = '${this.email}' AND senha = PASSWORD('${this.senha}')`
    // }
}

module.exports = Adm