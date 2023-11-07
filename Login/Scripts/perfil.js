const url = "http://localhost:3000"

const dado = JSON.parse(window.localStorage.getItem("dados")) || null

const form = document.getElementById('perfil')

if (dado !== null) {
    form.idUser.value = dado.id
    form.nome.value = dado.nome
    form.cpf.value = dado.cpf
    form.email.value = dado.email
    form.nascimento.value = dado.nascimento.split('T')[0]
    form.cep.value = dado.endereco.cep
    form.numero.value = dado.endereco.numero
    form.complemento.value = dado.endereco.complemento
    form.telefone.value = dado.telefone
} else {
    alert('Usuário não encontrado')
}

function voltar() {
    window.localStorage.removeItem("dados")
    window.location.href = '../client/login.html'
}

const msg = document.querySelector('.msg')
const senha = document.getElementById('senha')
const confirmacaoSenha = document.getElementById('confirmaSenha')

function editarPerfil() {
    let input = document.getElementsByTagName('input')
    
    for (let i = 0; i < input.length; i++) {
        if(input[i].disabled) {
            input[i].disabled = false
        } else {
            input[i].disabled = true
        }
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (senha.value === "" || confirmacaoSenha.value === "") {
        msg.textContent = "Preencha os campos acima"

        senha.style.outline = "solid"
        senha.style.outlineColor = "#A71E20"

        confirmacaoSenha.style.outline = "solid"
        confirmacaoSenha.style.outlineColor = "#A71E20"
    } else if (senha.value !== confirmacaoSenha.value) {
        msg.textContent = "Senhas não coincidem"

        senha.style.outline = "solid"
        senha.style.outlineColor = "#A71E20"

        confirmacaoSenha.style.outline = "solid"
        confirmacaoSenha.style.outlineColor = "#A71E20"
    } else {
        senha.style.outline = "none"
        confirmacaoSenha.style.outline = "none"

        const dadosPUT = {
            id: form.idUser.value,
            nome: form.nome.value,
            cpf: form.cpf.value,
            email: form.email.value,
            senha: form.senha.value,
            nascimento: form.nascimento.value,
            cep: form.cep.value,
            numero: form.numero.value,
            complemento: form.complemento.value,
        }

        const optionsPUT = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosPUT)
        }

        fetch(url + '/usuario', optionsPUT)
            .then((resp) => {
                window.location.reload()

                msg.textContent = "Dados alterados com sucesso"
            })
            .catch(err => console.error(err))
    }
});