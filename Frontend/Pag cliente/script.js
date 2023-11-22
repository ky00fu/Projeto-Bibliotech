// const uri = 'http://localhost:2222/emprestimo'
const uri = "http://localhost:3000";

const titulo = document.querySelector("#titulo");
const autor = document.querySelector("#autor");
const data_emprestimo = document.querySelector("#data_emprestimo");
const data_prevista = document.querySelector("#data_prevista");
const valor = document.querySelector("#valor");
const urlimg = document.querySelector("#url");
const perror = document.querySelector(".error");

const main = document.querySelector("main");
const workspace = document.querySelector(".workspace");
const workspaceText = document.querySelector("#workspace-text");
const modelo = document.querySelector(".modelo");
const asset = document.querySelector(".asset");

const clonemain = modelo.cloneNode(true);
const cloneasset = asset.cloneNode(true);

function hideWorkspaceText() {
  if (asset.style.display !== "none") {
    workspaceText.style.display = "none";
  } else {
    workspaceText.style.display = "block";
  }
}

hideWorkspaceText();

const dado = JSON.parse(window.localStorage.getItem("dados")) || null;
const nomeUsuario = document.querySelector("#nome-usuario");

if (dado !== null) {
  nomeUsuario.innerHTML = dado.nome;
} else {
  alert("Usuário não encontrado");
}

fetch(uri + "/emprestimo/" + dado.id, { method: "GET" })
  .then((resp) => resp.json())
  .then((resp) => montarlista(resp))
  .catch((err) => console.error(err));

// modelo
function montarlista(vetor) {
  vetor.forEach((e) => {
    let linha = document.createElement("div");
    linha.className = "modelo";

    let col1 = document.createElement("div");
    col1.className = "asset";

    let e1 = document.createElement("div");
    e1.className = "marcadorpag";

    let e12 = document.createElement("div");
    e12.className = "marcadorpag2";

    // foto do livro
    let e2 = document.createElement("div");
    e2.className = "foto";
    e2.style.backgroundImage = `url(${e.url})`;

    // título do livro
    let e3 = document.createElement("div");
    e3.className = "titulo";
    e3.innerHTML = e.titulo;

    col1.appendChild(e1);
    col1.appendChild(e12);
    col1.appendChild(e2);
    col1.appendChild(e3);

    let ee2 = document.createElement("div");
    ee2.className = "data_emprestimo";

    // ícone calendário pra data_emprestimo
    let ee2img = document.createElement("img");
    ee2img.className = "ee2img";

    let pdata_e = document.createElement("p");
    pdata_e.style.marginLeft = "4%";

    let forde = new Date(e.data_emprestimo).toLocaleDateString("pt-BR");
    pdata_e.innerHTML = forde;

    ee2.appendChild(ee2img);
    ee2.appendChild(pdata_e);
    col1.appendChild(ee2);

    if (e.data_devolucao == "0000-00-00") {
      e.data_devolucao = null;
    }

    // div data_prevista
    let ee3 = document.createElement("div");
    ee3.className = "data_prevista";

    let ee3img = document.createElement("img");
    ee3img.className = "ee3img";

    let pdata_p = document.createElement("p");
    pdata_p.style.marginLeft = "4%";

    let fordp = new Date(e.data_prevista).toLocaleDateString("pt-BR");

    pdata_p.innerHTML = fordp;

    ee3.appendChild(ee3img);
    ee3.appendChild(pdata_p);
    col1.appendChild(ee3);

    // cálculo cobrança
    function valorcobranca() {
      if (e.data_prevista == null && e.data_devolucao == null)
        return "Sem datas";
      else if (e.data_devolucao != null && e.data_prevista == null)
        return "Sem data prevista";
      else if (e.data_prevista != null && e.data_devolucao == null)
        return "Sem devolução";
      else if (e.data_prevista < e.data_devolucao) {
        let porcen = Number(e.valor) * 0.1;

        let ddv = new Date(e.data_devolucao);
        let dpv = new Date(e.data_prevista);

        let diferenca = (ddv - dpv) / (1000 * 60 * 60 * 24);

        return porcen * diferenca;
      } else return "Devolvido no prazo";
      // } else {
      //   excluirItem(e.id_emprestimo)
      //   return ""
      // }
    }

    // div cobranca
    let eee1 = document.createElement("div");
    eee1.className = "cobranca";

    let eee1img = document.createElement("img");
    eee1img.className = "eee1img";

    // cálculo cobrança
    let pcobranca = document.createElement("p");
    pcobranca.style.fontStyle = "normal";
    pcobranca.style.marginLeft = "4%";

    let valorCobranca = valorcobranca();

    if (typeof valorCobranca === "number") {
      pcobranca.innerHTML = "R$ " + valorCobranca.toFixed(2);
    } else {
      pcobranca.innerHTML = valorCobranca;
    }

    eee1.appendChild(eee1img);
    eee1.appendChild(pcobranca);
    col1.appendChild(eee1);

    // div btn_renovar
    let eee2 = document.createElement("div");
    eee2.className = "btn";

    let btnRenovar = document.createElement("button");
    btnRenovar.className = "btnRenovar";
    btnRenovar.innerHTML = "Renovar";
    // btnRenovar.addEventListener("click", () => renovar(e.id_emprestimo));

    if (e.data_devolucao === null) {
      btnRenovar.addEventListener("click", () => renovar(e.id_emprestimo));
    } else {
      btnRenovar.style.display = "none";
      eee2.style.background =
        "linear-gradient(to left, #e0ffed 100%, #c8ffdf 90%)";
    }

    function renovar(id_emprestimo) {
      var dataPrevista = new Date(e.data_prevista);
      dataPrevista.setDate(dataPrevista.getDate() + 20);

      const bodyDP = {
        data_prevista: dataPrevista,
      };

      const optionsDP = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyDP),
      };

      fetch(uri + "/emprestimo/" + id_emprestimo, optionsDP)
        .then((response) => window.location.reload())
        .catch((err) => console.error(err));
    }

    eee1.appendChild(eee1img);
    eee1.appendChild(pcobranca);
    // eee2.appendChild(btnRenovar);

    if (btnRenovar.style.display !== "none") {
      eee2.appendChild(btnRenovar);
    }

    col1.appendChild(eee1);
    col1.appendChild(eee2);

    linha.appendChild(col1);
    workspace.appendChild(linha);
  });
}

document.querySelector("#cadastro").addEventListener("submit", (e) => {
  e.preventDefault();

  add();
});

// function excluirItem(i, data_devolucao) {
//   if (data_devolucao !== null) {
//     fetch(uri + "/emprestimo/" + i, { method: "DELETE" })
//       // .then((resp) => resp.status)
//       .then((resp) => window.location.reload())
//       .then((resp) => {
//         if (resp != 204) alert("Erro ao enviar dados");
//         else window.location.reload();
//       });
//   } else {
//     console.log("Item não pode ser deletado porque data_devolucao não é null");
//   }
// }

function tipourl() {
  var a = urlimg.value;
  var tipo = [];

  for (let i = 4; i > 0; i--) {
    tipo.push(a[a.length - i]);
  }

  if (
    (tipo[0] == "." && tipo[1] == "p") ||
    (tipo[1] == "j" && tipo[2] == "n") ||
    (tipo[2] == "p" && tipo[3] == "g")
  ) {
    return true;
  } else return false;
}

// function add() {
//   if (titulo.value == "" || autor.value == "" || urlimg.value == "") {
//     perror.innerHTML = "Titulo, autor e URL da imagem não podem ser vazios.";
//     perror.classList.remove("card");
//   } else if (Number(valor.value) < 0 || Number(valor.value) == "") {
//     perror.classList.remove("card");
//     perror.innerHTML =
//       "O valor do livro não pode ser vazio ou negativo. Informe números inteiros";
//     valor.value = "";
//   } else if (tipourl() == false) {
//     perror.classList.remove("card");
//     perror.innerHTML =
//       "A URL do campo imagem precisar ter o formato de imagem png ou jpg.";
//     urlimg.value = "";
//   } else {
//     perror.classList.add("card");

//     clonemain.classList.remove("card");

//     clonemain.querySelector(".asset").remove();

//     cloneasset.querySelector(
//       ".foto"
//     ).style.backgroundImage = `url(${urlimg.value})`;
//     cloneasset.querySelector("#ti").innerHTML = titulo.value;
//     cloneasset.querySelector("#au").innerHTML = autor.value;

//     clonemain.appendChild(cloneasset);
//     modelo.appendChild(clonemain);
//     workspace.appendChild(clonemain);

//     titulo.value = "";
//     autor.value = "";
//     valor.value = "";
//     urlimg.value = "";
//   }

//   let body = {
//     id_cliente: dado.id,
//     titulo: titulo.value,
//     autor: autor.value,
//     url: urlimg.value,
//     valor: valor.value,
//   };

//   let options = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(body),
//   };

//   fetch(uri + "/emprestimo", options)
//     .then((resp) => window.location.reload())
//     .catch((err) => console.error(err));
// }

function add() {
  const title = titulo.value;
  const author = autor.value;
  const imageUrl = urlimg.value;
  const bookValue = valor.value;

  if (title === "" || author === "" || imageUrl === "") {
    perror.innerHTML = "Titulo, autor e URL da imagem não podem ser vazios.";
    perror.classList.remove("card");
  } else if (Number(bookValue) < 0 || Number.isNaN(Number(bookValue))) {
    perror.classList.remove("card");
    perror.innerHTML = "O valor do livro não pode ser vazio ou negativo. Informe números inteiros";
    valor.value = "";
  } else if (!tipourl()) {
    perror.classList.remove("card");
    perror.innerHTML =
      "A URL do campo imagem precisa ter o formato de imagem png ou jpg.";
    urlimg.value = "";
  } else {
    perror.classList.add("card");

    clonemain.classList.remove("card");
    clonemain.querySelector(".asset").remove();

    cloneasset.querySelector(".foto").style.backgroundImage = `url(${imageUrl})`;
    cloneasset.querySelector("#ti").innerHTML = title;

    function cobrar() {
      if (data_prevista.value == "" && data_devolucao.value == "")
        return "Sem datas";
      else if (data_devolucao.value != "" && data_prevista.value == "")
        return "Sem data prevista";
      else if (data_prevista.value != "" && data_devolucao.value == "")
        return "Sem devolução";
      else if (data_prevista.value < data_devolucao.value) {
        let porcen = Number(valor.value) * 0.1;

        let ddv = new Date(data_devolucao.value);
        let dpv = new Date(data_prevista.value);

        let diferenca = (ddv - dpv) / (1000 * 60 * 60 * 24);

        return porcen * diferenca;
      } else return "Devolvido no prazo";
    }

    cloneasset.querySelector("#cobr").innerHTML = cobrar();

    clonemain.appendChild(cloneasset);
    modelo.appendChild(clonemain);
    workspace.appendChild(clonemain);

    titulo.value = "";
    autor.value = "";
    valor.value = "";
    urlimg.value = "";

    const body = {
      id_cliente: dado.id,
      titulo: title,
      autor: author,
      url: imageUrl,
      valor: bookValue,
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    fetch(uri + "/emprestimo", options)
      .then((resp) => window.location.reload())
      .catch((err) => console.error(err));
  }
}

function redirectHome() {
  window.location.href = `../Pag inicial/Entrada/index.html`;
}

console.info("Script running");