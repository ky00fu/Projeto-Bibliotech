const url = "http://localhost:3000"

const acesso = document.querySelector('.acesso');
const msgErro = document.querySelector('#msgErro');

acesso.addEventListener('submit', function (e) {
    e.preventDefault();

    const dados = {
        email: acesso.email.value,
        senha: acesso.senha.value
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    }

    fetch(url + '/cliente', options)
        .then((resp) => {
            if (resp.status !== 202) {
                msgErro.textContent = "E-mail ou senha incorreta"
            } else {
                return resp.json()
            }
        })
        .then((resp) => {
            let inpEmail = document.getElementById('email')
            let inpSenha = document.getElementById('senha')

            if (inpEmail.value === "" || inpSenha.value === "") {
                msgErro.textContent = "Preencha os campos abaixo"
            } else if (inpEmail.value && inpSenha.value) {
                if (resp.length > 0) {
                    window.localStorage.setItem('dados', JSON.stringify(resp[0]))
                    window.location.href = `../../../Pag cliente/index.html`
                } else {
                    msgErro.textContent = "Usuário não encontrado"
                }
            }
        })
});