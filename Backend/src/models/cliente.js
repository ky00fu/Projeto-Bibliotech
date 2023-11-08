class Cliente {
  constructor(i) {
    this.id = i.id;
    this.nome = i.nome;
    this.email = i.email;
    this.senha = i.senha;
  }

  create() {
    return `INSERT INTO cliente(nome, email, senha) VALUE('${this.nome}','${this.email}','${this.senha}')`;
  }

  read() {
    return `SELECT * FROM cliente WHERE id_cliente = ${this.id}`;
  }
}

module.exports = Cliente;
