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
    if (this.id_cliente == undefined) return `SELECT * FROM cliente`;
    else return `SELECT * FROM cliente WHERE id = '${this.id}'`;
  }

  entrar() {
    return `SELECT * FROM cliente WHERE email = '${this.email}' AND senha = PASSWORD('${this.senha}')`;
  }
}

module.exports = Cliente;
