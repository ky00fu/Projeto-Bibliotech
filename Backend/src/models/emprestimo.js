class Emprestimo {

    constructor(i) {
        this.id = i.id
        this.id_cliente = i.id_cliente
        this.titulo = i.titulo
        this.url = i.url
        this.autor = i.autor
        this.valor = i.valor
        this.data_emprestimo = i.data_emprestimo
        this.data_prevista = i.data_prevista
        this.data_devolucao = i.data_devolucao
    }

    create() {
        return `INSERT INTO emprestimo VALUE(default,'${this.id_cliente}','${this.titulo}','${this.url}',NULL,'${this.valor}',NULL,'${this.data_emprestimo}', '${this.data_prevista}', '${this.data_devolucao}')`
    }

    read() {
        if (this.id_cliente == undefined)
            return `SELECT * FROM admFront`
        else
            return `SELECT * FROM admFront WHERE id_cliente = '${this.id_cliente}'`
    }

    update() {
        return `UPDATE emprestimo SET data_prevista = '${this.data_prevista}', data_devolucao = '${this.data_devolucao}', valor = '${this.valor}' WHERE id = '${this.id}'`
    }

    delete() {
        return `DELETE FROM emprestimo WHERE id = '${this.id}'`
    }
}

module.exports = Emprestimo