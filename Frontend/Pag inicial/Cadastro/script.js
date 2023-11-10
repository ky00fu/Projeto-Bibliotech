const url = "http://localhost:3000"

const cadastro = document.querySelector('.cadastro');
const msgErro = document.querySelector('#msgErro');

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

    fetch(url + '/cliente/registro', options)
        .then((resp) => {
            let inpNome = document.getElementById('nome')
            let inpEmail = document.getElementById('email')
            let inpSenha = document.getElementById('senha')

            if (inpNome.value === "" || inpEmail.value === "" || inpSenha.value === "") {
                msgErro.textContent = "Preencha os campos abaixo"
            } else if (inpNome.value && inpEmail.value && inpSenha.value) {
                if (resp.length > 0) {
                    // window.localStorage.setItem('dados', JSON.stringify(resp[0]))
                    msgErro.textContent = "Usuário criado com sucesso"
                    msgErro.classList.add("sucesso")
                    // window.location.href = `../Login/Cliente/index.html`
                } else {
                    msgErro.textContent = "Usuário não encontrado"
                }
            }
        })
});