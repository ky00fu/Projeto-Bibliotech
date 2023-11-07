const url = "http://localhost:3000"

const acesso = document.getElementById('login');
const msgErro = document.getElementById('erro');

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

    fetch(url + '/usuario', options)
        .then((resp) => {
            if (resp.status !== 202) {
                erro.textContent = "E-mail ou senha incorreta"
            } else {
                return resp.json()
            }
        })
        .then((resp) => {
            let inpEmail = document.getElementById('email')
            let inpSenha = document.getElementById('senha')

            if (inpEmail.value === "" || inpSenha.value === "") {
                erro.textContent = "Preencha os campos acima"
            } else if (inpEmail.value && inpSenha.value) {
                if (resp.length > 0) {
                    window.localStorage.setItem('dados', JSON.stringify(resp[0]))
                    window.location.href = `perfil.html`
                } else {
                    msgErro.textContent = "Usuário não encontrado"
                }
            }
        })
});