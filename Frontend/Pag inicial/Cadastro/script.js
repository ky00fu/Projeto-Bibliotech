const url = "http://localhost:3000"

const cadastro = document.querySelector('.cadastro');
const mensagem = document.querySelector('#msg');
// const msgSucesso = document.querySelector('#msgSucesso');

cadastro.addEventListener('submit', function (e) {
    e.preventDefault();

    const dados = {
        nome: cadastro.nome.value,
        email: cadastro.email.value,
        senha: cadastro.senha.value
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    }

    fetch(url + '/cliente', options)
        .then((resp) => {
            let inpNome = document.getElementById('nome')
            let inpEmail = document.getElementById('email')
            let inpSenha = document.getElementById('senha')

            if (inpNome.value === "" || inpEmail.value === "" || inpSenha.value === "") {
                mensagem.textContent = "Preencha os campos abaixo"
            } else if (inpNome.value && inpEmail.value && inpSenha.value) {
                if (resp.length > 0) {
                    mensagem.textContent = "Usuário não criado"
                } else {
                    mensagem.classList.add("sucesso")
                    mensagem.textContent = "Usuário criado com sucesso"
                }
            }
        })
});