const url = "http://localhost:3000";

const acesso = document.querySelector(".login");
const msgDiv = document.querySelector(".erro");
const msgErro = document.querySelector("#msgErro");

acesso.addEventListener("submit", function (e) {
  e.preventDefault();

  const dados = {
    email: acesso.email.value,
    senha: acesso.senha.value,
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  };

  fetch(url + "/adm", options)
    .then((resp) => {
      if (resp.status !== 202) {
        msgDiv.offsetWidth;
        msgDiv.classList.remove('show')
        msgErro.textContent = "E-mail ou senha incorreta";
        msgDiv.offsetWidth;
        msgDiv.classList.add('show')
      } else {
        return resp.json();
      }
    })
    .then((resp) => {
      let inpEmail = document.getElementById("email");
      let inpSenha = document.getElementById("senha");

      if (inpEmail.value === "" || inpSenha.value === "") {
        msgDiv.offsetWidth;
        msgDiv.classList.remove('show')
        msgErro.textContent = "Preencha os campos abaixo";
        msgDiv.offsetWidth;
        msgDiv.classList.add('show')
      } else if (inpEmail.value && inpSenha.value) {
        if (resp.length > 0) {
          window.localStorage.setItem("dados", JSON.stringify(resp[0]));
          window.location.href = `../../../Pag adm/index.html`;
        } else {
          msgDiv.offsetWidth;
          msgDiv.classList.remove('show')
          msgErro.textContent = "Usuário não encontrado";
          msgDiv.offsetWidth;
          msgDiv.classList.add('show')
      }
      }
    });
});

function redirectHome() {
  window.location.href = `../../Entrada/index.html`;
  window.localStorage.removeItem("dados");
}