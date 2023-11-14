// const uri = 'http://localhost:2222/emprestimo'
const uri = "http://localhost:3000";

const titulo = document.querySelector("#titulo");
const autor = document.querySelector("#autor");
const data_emprestimo = document.querySelector("#data_emprestimo");
const data_prevista = document.querySelector("#data_prevista");
const data_devolucao = document.querySelector("#data_devolucao");
const valor = document.querySelector("#valor");
const urlimg = document.querySelector("#image");

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

fetch(uri + "/emprestimo", { method: "GET" })
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

    let col2 = document.createElement("div");
    col2.className = "form-container";

    let e1 = document.createElement("div");
    e1.className = "marcadorpag";

    let e1b = document.createElement("div");
    e1b.className = "marcadorpag2";

    col2.appendChild(e1b);

    // mensagem erro
    let msgErro = document.createElement("div");
    msgErro.className = "error";

    let pMsgErro = document.createElement("div");
    pMsgErro.className = "msg-erro";
    pMsgErro.innerHTML = "Mensagem de erro";

    msgErro.appendChild(pMsgErro);
    col2.appendChild(msgErro);

    // foto do livro
    let e2 = document.createElement("div");
    e2.className = "foto";
    e2.style.backgroundImage = `url(${e.url})`;

    // título do livro
    let e3 = document.createElement("div");
    e3.className = "titulo";
    e3.innerHTML = e.titulo;

    col1.appendChild(e1);
    col1.appendChild(e2);
    col1.appendChild(e3);

    // div cliente id
    let ee1 = document.createElement("div");
    ee1.className = "id_cliente";

    let ee1img = document.createElement("img");
    ee1img.className = "ee1img";

    let nomeCliente = document.createElement("p");
    nomeCliente.style.marginLeft = "4%";
    nomeCliente.innerHTML = e.nome;

    ee1.appendChild(ee1img);
    ee1.appendChild(nomeCliente);
    col1.appendChild(ee1);

    // div cliente id edit
    let ee1b = document.createElement("div");
    ee1b.className = "id_cliente";

    let nomeClienteb = document.createElement("p");
    nomeClienteb.style.marginLeft = "4%";
    nomeClienteb.innerHTML = e.nome;

    let ee1bimg = document.createElement("img");
    ee1bimg.className = "ee1bimg";

    ee1b.appendChild(ee1bimg);
    ee1b.appendChild(nomeClienteb);
    col2.appendChild(ee1b);

    // div data_emprestimo
    let ee2 = document.createElement("div");
    ee2.className = "data_emprestimo";

    let ee2img = document.createElement("img");
    ee2img.className = "ee2img";

    let pdata_e = document.createElement("p");
    pdata_e.style.marginLeft = "4%";

    let forde = new Date(e.data_emprestimo).toLocaleDateString("pt-BR");

    pdata_e.innerHTML = forde;

    ee2.appendChild(ee2img);
    ee2.appendChild(pdata_e);
    col1.appendChild(ee2);

    // div data_emprestimo edit
    let ee2b = document.createElement("div");
    ee2b.className = "data_emprestimo";

    let ee2bimg = document.createElement("img");
    ee2bimg.className = "ee2bimg";

    let pdata_eb = document.createElement("p");
    pdata_eb.style.marginLeft = "4%";

    let fordeb = new Date(e.data_emprestimo).toLocaleDateString("pt-BR");

    pdata_eb.innerHTML = fordeb;

    ee2b.appendChild(ee2bimg);
    ee2b.appendChild(pdata_eb);
    col2.appendChild(ee2b);

    if (e.data_prevista == "0000-00-00" || e.data_devolucao == "0000-00-00") {
      e.data_prevista = null;
      e.data_devolucao = null;
    }

    let formDiv = document.createElement("form");
    formDiv.setAttribute("id", "edit");
    // let form = document.getElementById("edit");

    // div data_prevista
    let ee3 = document.createElement("div");
    ee3.className = "data_prevista";

    let ee3img = document.createElement("img");
    ee3img.className = "ee3img";

    let pdata_p = document.createElement("p");
    pdata_p.style.marginLeft = "4%";

    let fordp = new Date(e.data_prevista).toLocaleDateString("pt-BR");

    if (e.data_prevista != null) pdata_p.innerHTML = fordp;
    else pdata_p.innerHTML = "00/00/0000";

    ee3.appendChild(ee3img);
    ee3.appendChild(pdata_p);
    col1.appendChild(ee3);

    // div data_prevista edit
    let ee3b = document.createElement("div");
    ee3b.className = "data_prevista";

    let ee3bimg = document.createElement("img");
    ee3bimg.className = "ee3bimg";

    let idata_p = document.createElement("input");
    idata_p.type = "text";
    pdata_p.style.marginLeft = "4%";

    if (e.data_prevista != null) idata_p.placeholder = fordp;
    else idata_p.placeholder = "00/00/0000";

    ee3b.appendChild(ee3bimg);
    ee3b.appendChild(idata_p);
    col2.appendChild(ee3b);

    // div data devolução
    let ee4 = document.createElement("div");
    ee4.className = "data_devolucao";

    let ee4img = document.createElement("img");
    ee4img.className = "ee4img";

    let data_d = document.createElement("p");
    data_d.style.marginLeft = "4%";

    let fordd = new Date(e.data_devolucao).toLocaleDateString("pt-BR");

    if (e.data_devolucao != null) data_d.innerHTML = fordd;
    else data_d.innerHTML = "00/00/0000";

    ee4.appendChild(ee4img);
    ee4.appendChild(data_d);
    col1.appendChild(ee4);

    // div data devolução edit
    let ee4b = document.createElement("div");
    ee4b.className = "data_devolucao";

    let ee4bimg = document.createElement("img");
    ee4bimg.className = "ee4bimg";

    let idata_d = document.createElement("input");
    idata_d.type = "text";
    idata_d.style.marginLeft = "4%";

    if (e.data_devolucao != null) idata_d.placeholder = fordd;
    else idata_d.placeholder = "00/00/0000";

    ee4b.appendChild(ee4bimg);
    ee4b.appendChild(idata_d);
    col2.appendChild(ee4b);

    // cálculo cobrança
    function valorcobranca() {
      if (e.data_prevista == null && e.data_devolucao == null)
        // return "Sem datas";
        return "R$ 0.00";
      else if (e.data_devolucao != null && e.data_prevista == null)
        // return "Sem data prevista";
        return "R$ 0.00";
      else if (e.data_prevista != null && e.data_devolucao == null)
        // return "Sem devolução";
        return "R$ 0.00";
      else if (e.data_prevista < e.data_devolucao) {
        let porcen = Number(e.valor) * 0.1;

        let ddv = new Date(e.data_devolucao);
        let dpv = new Date(e.data_prevista);

        let diferenca = (ddv - dpv) / (1000 * 60 * 60 * 24);

        return porcen * diferenca;
      }
      //  return "Devolvido no prazo";
      else return "R$ 0.00";
    }

    // div campo_cobranca
    let ee5 = document.createElement("div");
    ee5.className = "campocobranca";

    // div valor original
    let eee1 = document.createElement("div");
    eee1.className = "valor-original";

    let eee1img = document.createElement("img");
    eee1img.className = "eee1img";

    // valor original do livro
    let pValorOriginal = document.createElement("p");
    pValorOriginal.style.fontStyle = "normal";
    pValorOriginal.style.marginLeft = "4%";
    pValorOriginal.innerHTML = `R$ ${e.valor}`;

    // div cobranca
    let eee2 = document.createElement("div");
    eee2.className = "cobranca";

    let eee2img = document.createElement("img");
    eee2img.className = "eee2img";

    // cálculo cobrança
    let pcobranca = document.createElement("p");
    pcobranca.style.fontStyle = "normal";
    pcobranca.style.marginLeft = "4%";
    pcobranca.innerHTML = valorcobranca();

    eee1.appendChild(eee1img);
    eee1.appendChild(pValorOriginal);
    eee2.appendChild(eee2img);
    eee2.appendChild(pcobranca);

    ee5.appendChild(eee1);
    ee5.appendChild(eee2);
    col1.appendChild(ee5);

    // div cobranca edit
    let eee2b = document.createElement("div");
    eee2b.className = "cobranca";

    let eee2bimg = document.createElement("img");
    eee2bimg.className = "eee2bimg";

    // cálculo cobrança
    let icobranca = document.createElement("input");
    icobranca.type = "number";
    icobranca.placeholder = `R$ ${e.valor}`;
    icobranca.style.fontStyle = "normal";
    icobranca.style.marginLeft = "4%";

    eee2b.appendChild(eee2bimg);
    eee2b.appendChild(icobranca);
    col2.appendChild(eee2b);

    let cancelarAtualizar = document.createElement("div");
    cancelarAtualizar.className = "btns-cancel-att";

    // div botão cancelar edit
    let divBtnCancelar = document.createElement("div");
    divBtnCancelar.className = "cancelar";

    let btnCancelar = document.createElement("button");
    btnCancelar.className = "btn-cancelar";
    btnCancelar.innerHTML = "Cancelar";

    divBtnCancelar.appendChild(btnCancelar);
    cancelarAtualizar.appendChild(divBtnCancelar);

    const form = document.getElementById("edit");

    btnCancelar.addEventListener("click", () => {
      col2.style.display = "none";
      col1.style.display = "";
      form.reset();
    });

    // div botão atualizar edit
    let divBtnAtualizar = document.createElement("div");
    divBtnAtualizar.className = "atualizar";

    let btnAtualizar = document.createElement("button");
    btnAtualizar.type = "submit";
    btnAtualizar.innerHTML = "Atualizar";
    btnAtualizar.className = "btn-atualizar";
    btnAtualizar.addEventListener("click", () => {
      col2.style.display = "none";
      col1.style.display = "";

      const id_emprestimo = e.id_emprestimo;

      alterarItem(id_emprestimo);

      form.reset();
    });

    function alterarItem(id_emprestimo) {
      console.log("alterarItem function called"); // Add this line for debugging
    
      form.addEventListener("submit", function (event) {
        event.preventDefault();
    
        console.log("Form submitted"); // Add this line for debugging
    
        const dataPrevistaInput = document.getElementById("data_prevista");
        const dataDevolucaoInput = document.getElementById("data_devolucao");
        const valorInput = document.getElementById("valor");
    
        const dataPrevistaValue = dataPrevistaInput.value;
        const dataDevolucaoValue = dataDevolucaoInput.value;
        const valorValue = valorInput.value;
    
        console.log("Data Prevista:", dataPrevistaValue);
        console.log("Data Devolucao:", dataDevolucaoValue);
        console.log("Valor:", valorValue);
    
        const dadosPATCH = {
          data_prevista: dataPrevistaValue,
          data_devolucao: dataDevolucaoValue,
          valor: valorValue
        };
    
        const optionsPATCH = {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dadosPATCH),
        };
    
        fetch(uri + "/emprestimo/" + id_emprestimo, optionsPATCH)
          .then((resp) => resp.json())
          .then((resp) => {
            console.log(resp);
          })
          .catch((err) => console.error(err));
      });
    }
    
    // Ensure that alterarItem is called when the button is clicked
    document.querySelector(".btn-atualizar").addEventListener("click", function() {
      alterarItem(e.id_emprestimo);
    });
    

    // function alterarItem(id_emprestimo) {
    //   const form = document.getElementById("edit");

    //   form.addEventListener("submit", function (event) {
    //     event.preventDefault();

    //     const dataPrevistaInput = document.getElementById("data_prevista");
    //     const dataDevolucaoInput = document.getElementById("data_devolucao");
    //     const valorInput = document.getElementById("valor");

    //     const dataPrevistaValue = dataPrevistaInput.value;
    //     const dataDevolucaoValue = dataDevolucaoInput.value;
    //     const valorValue = valorInput.value;

    //     const dadosPATCH = {
    //       data_prevista: dataPrevistaValue,
    //       data_devolucao: dataDevolucaoValue,
    //       valor: valorValue,
    //     };

    //     const optionsPATCH = {
    //       method: "PATCH",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(dadosPATCH),
    //     };

    //     fetch(uri + "/emprestimo/" + id_emprestimo, optionsPATCH)
    //       .then((resp) => resp.json())
    //       .then((resp) => {
    //         console.log(resp);
    //         console.log("Valor:", valorValue);
    //       })
    //       .catch((err) => console.error(err));
    //   });
    // }

    // form.addEventListener("submit", (e) => {
    // e.preventDefault();

    // function alterarItem(id_emprestimo, form) {
    //   // const dadosPATCH = {};

    //   const dadosPATCH = {
    //     data_prevista: form.data_prevista.value,
    //     data_devolucao: form.data_devolucao.value,
    //     valor: form.valor.value,
    //   };

    //   // const dadosPATCH = {
    //   //   data_prevista: form.querySelector("#data_prevista").value,
    //   //   data_devolucao: form.querySelector("#data_devolucao").value,
    //   //   valor: form.querySelector("#valor").value,
    //   // };

    //   // Check if data_prevista is defined before accessing its value
    //   // if (form.data_prevista) {
    //   //   dadosPATCH.data_prevista = form.data_prevista.value;
    //   // }

    //   // if (form.data_devolucao) {
    //   //   dadosPATCH.data_devolucao = form.data_devolucao.value;
    //   // }

    //   // if (form.valor) {
    //   //   dadosPATCH.valor = form.valor.value;
    //   // }

    //   // if (data_prevista.value) {
    //   //   dadosPATCH.data_prevista = form.data_prevista.value;
    //   // }

    //   // if (data_devolucao.value) {
    //   //   dadosPATCH.data_devolucao = form.data_devolucao.value;
    //   // }

    //   // if (valor.value) {
    //   //   dadosPATCH.valor = form.valor.value;
    //   // }

    //   const optionsPATCH = {
    //     method: "PATCH",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(dadosPATCH),
    //   };

    //   fetch(uri + "/emprestimo/" + id_emprestimo, optionsPATCH)
    //     .then((resp) => resp.json())
    //     .then((resp) => {
    //       console.log(resp);
    //       // console.log(valor.value);
    //       console.log(form); // Check if the form is defined
    //       console.log(form.valor); // Check if data_prevista is defined
    //       console.log(form.valor.value); // Check if value is accessible
    //     })
    //     .catch((err) => console.error(err));
    // }
    // // });

    formDiv.appendChild(ee3b);
    formDiv.appendChild(ee4b);
    formDiv.appendChild(eee2b);
    formDiv.appendChild(btnAtualizar);

    col2.appendChild(formDiv);

    // let inpDP = document.querySelector("#data_prevista");
    // let inpDD = document.querySelector("#data_devolucao");
    // let inpValor = document.querySelector("#valor");

    // const form = document.createElement("form");
    // form.setAttribute("id", "editForm");

    // form.appendChild(inpDP);
    // form.appendChild(inpDD);
    // form.appendChild(inpValor);

    // col2.appendChild(form)

    divBtnAtualizar.appendChild(btnAtualizar);
    cancelarAtualizar.appendChild(divBtnAtualizar);

    col2.appendChild(cancelarAtualizar);

    // div delete-btn
    let eee3 = document.createElement("div");
    eee3.className = "btn_deletar";
    eee3.setAttribute("onclick", `excluirItem('${e.id_emprestimo}')`);

    let eee3img = document.createElement("img");
    eee3img.className = "eee3img";

    eee3.appendChild(eee3img);
    col1.appendChild(eee3);

    // div edit-btn
    let eee4 = document.createElement("div");
    eee4.className = "btn_editar";

    eee4.addEventListener("click", () => {
      col1.style.display = "none";
      col2.style.display = "";
    });

    let eee4img = document.createElement("img");
    eee4img.className = "eee4img";

    eee4.appendChild(eee4img);
    col1.appendChild(eee4);

    linha.appendChild(col1);
    linha.appendChild(col2);

    col2.style.display = "none";

    workspace.appendChild(linha);
  });
}

function excluirItem(i) {
  fetch(uri + "/emprestimo/" + i, { method: "DELETE" })
    .then((resp) => resp.status)
    .then((resp) => {
      if (resp != 204) alert("Erro ao enviar dados");
      else window.location.reload();
    });
}

const perror = document.querySelector(".error");

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

function add() {
  if (
    titulo.value == "" ||
    autor.value == "" ||
    urlimg.value == "" ||
    data_emprestimo.value == ""
  ) {
    perror.innerHTML =
      "Titulo, autor, data de emprestimo e URL da imagem não podem ser vazios.";
    perror.classList.remove("card");
  } else if (
    data_prevista.value != "" &&
    data_prevista.value < data_emprestimo.value
  ) {
    perror.classList.remove("card");
    perror.innerHTML =
      "Indique uma data de previsão que seja superior a data de emprestimo";
    data_prevista.value = "";
  } else if (
    data_devolucao.value != "" &&
    data_devolucao.value < data_emprestimo.value
  ) {
    perror.classList.remove("card");
    perror.innerHTML =
      "Indique uma data de devolução que seja superior a data de emprestimo";
    data_devolucao.value = "";
  } else if (Number(valor.value) < 0 || Number(valor.value) == "") {
    perror.classList.remove("card");
    perror.innerHTML =
      "O valor do livro não pode ser vazio ou negativo. Informe números inteiros";
    valor.value = "";
  } else if (tipourl() == false) {
    perror.classList.remove("card");
    perror.innerHTML =
      "A URL do campo imagem precisar ter o formato de imagem png ou jpg.";
    urlimg.value = "";
  } else {
    perror.classList.add("card");

    clonemain.classList.remove("card");

    clonemain.querySelector(".asset").remove();
    // clonemain.querySelector(".info").remove();

    cloneasset.querySelector(
      ".foto"
    ).style.backgroundImage = `url(${image.value})`;
    cloneasset.querySelector("#ti").innerHTML = titulo.value;

    cloneinfo.querySelector("#au").innerHTML = autor.value;
    cloneinfo.querySelector("#de").innerHTML = data_emprestimo.value;
    cloneinfo.querySelector("#dp").innerHTML = data_prevista.value;
    cloneinfo.querySelector("#dd").innerHTML = data_devolucao.value;

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
      } else return "devolvido no prazo";
    }

    cloneinfo.querySelector("#cobr").innerHTML = cobrar();

    clonemain.appendChild(cloneasset);
    clonemain.appendChild(cloneinfo);
    modelo.appendChild(clonemain);
    workspace.appendChild(clonemain);

    titulo.value = "";
    autor.value = "";
    data_emprestimo.value = "";
    data_prevista.value = "";
    data_devolucao.value = "";
    valor.value = "";
    urlimg.value = "";
  }
}

console.info("Script running");
