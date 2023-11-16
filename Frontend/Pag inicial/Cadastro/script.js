const url = "http://localhost:3000"

const cadastro = document.querySelector('.cadastro')
const mensagem = document.querySelector('#msg')

cadastro.addEventListener('submit', function (e) {
    e.preventDefault()

    const inpNome = document.getElementById('nome')
    const inpEmail = document.getElementById('email')
    const inpSenha = document.getElementById('senha')

    if (inpNome.value === "" || inpEmail.value === "" || inpSenha.value === "") {
        mensagem.textContent = "Preencha todos os campos abaixo"
        return
    }
    
    if (inpSenha.value.length < 8) {
        mensagem.textContent = "A senha deve ter pelo menos 8 caracteres"
        return
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

    fetch(url + '/cliente/registro', options)
        .then((resp) => {
            if (!resp.ok) {
                throw new Error("Erro ao criar usuário")
            }
            return resp.json()            
        })
        .then((data) => {
            mensagem.classList.add("sucesso")
            mensagem.textContent = "Usuário criado com sucesso. Você será redirecionado"
            
            setTimeout(() => {
                window.location.href = '../Login/Cliente/index.html'
            }, 3000)
        })
        .catch((error) => {
            mensagem.textContent = "Erro ao criar usuário"
        })
})