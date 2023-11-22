const url = "http://localhost:3000";

const cadastro = document.querySelector(".cadastro");
const msgDiv = document.querySelector(".erro");
const mensagem = document.querySelector("#msg");

cadastro.addEventListener("submit", function (e) {
  e.preventDefault();

  const inpNome = document.getElementById("nome");
  const inpEmail = document.getElementById("email");
  const inpSenha = document.getElementById("senha");

  if (inpNome.value === "" || inpEmail.value === "" || inpSenha.value === "") {
    msgDiv.offsetWidth;
    msgDiv.classList.remove("show");

    mensagem.textContent = "Preencha todos os campos abaixo";

    msgDiv.offsetWidth;
    msgDiv.classList.add("show");
    return;
  }

  if (inpSenha.value.length < 8) {
    msgDiv.offsetWidth;
    msgDiv.classList.remove("show");

    mensagem.textContent = "A senha deve ter pelo menos 8 caracteres";

    msgDiv.offsetWidth;
    msgDiv.classList.add("show");
    return;
  }

  if (!inpEmail.value.toLowerCase().endsWith(".com")) {
    msgDiv.offsetWidth;
    msgDiv.classList.remove("show");

    mensagem.textContent = "O email deve terminar com '.com'";

    msgDiv.offsetWidth;
    msgDiv.classList.add("show");
    return;
  }

  const dados = {
    nome: inpNome.value,
    email: inpEmail.value,
    senha: inpSenha.value,
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  };

  fetch(url + "/cliente/registro", options)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Erro ao criar usuário");
      }
      return resp.json();
    })
    .then((data) => {
      msgDiv.offsetWidth;
      msgDiv.classList.remove("show");

      mensagem.classList.add("sucesso");
      mensagem.innerHTML =
        "Usuário criado com sucesso<br>Redirecionando em <span id='countdown'>5</span> segundos";

      msgDiv.offsetWidth;
      msgDiv.classList.add("show");

      let countdownValue = 5;
      const countdownSpan = document.getElementById("countdown");
      const countdownInterval = setInterval(() => {
        countdownValue--;
        countdownSpan.textContent = countdownValue;

        if (countdownValue <= 0) {
          clearInterval(countdownInterval);
          window.location.href = "../Login/Cliente/index.html";
        }
      }, 1000);
    })
    .catch((error) => {
      msgDiv.offsetWidth;
      msgDiv.classList.remove("show");

      mensagem.textContent = "Erro ao criar usuário";

      msgDiv.offsetWidth;
      msgDiv.classList.add("show");
    });
});
