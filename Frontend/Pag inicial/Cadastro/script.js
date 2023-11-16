const url = "http://localhost:3000"

const cadastro = document.querySelector('.cadastro');
const mensagem = document.querySelector('#msg');

cadastro.addEventListener('submit', function (e) {
    e.preventDefault();

    const inpNome = document.getElementById('nome');
    const inpEmail = document.getElementById('email');
    const inpSenha = document.getElementById('senha');

    if (inpSenha.value.length < 8) {
        mensagem.textContent = "A senha deve ter pelo menos 8 caracteres.";
        return; // Stop execution if the password is too short
    }

    const dados = {
        nome: inpNome.value,
        email: inpEmail.value,
        senha: inpSenha.value
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    }

    fetch(url + '/cliente', options)
        .then((resp) => {
            if (inpNome.value === "" || inpEmail.value === "" || inpSenha.value === "") {
                mensagem.textContent = "Preencha todos os campos abaixo."
            } else if (inpNome.value && inpEmail.value && inpSenha.value) {
                if (resp.length > 0) {
                    mensagem.textContent = "Usuário não criado.";
                } else {
                    mensagem.classList.add("sucesso");
                    mensagem.textContent = "Usuário criado com sucesso.";
                }
            }
        })
});