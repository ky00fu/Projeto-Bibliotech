// const uri = 'http://localhost:2222/emprestimo'
const uri = "http://localhost:3000";

const titulo = document.querySelector("#titulo");
const autor = document.querySelector("#autor");
const data_emprestimo = document.querySelector("#data_emprestimo");
const data_prevista = document.querySelector("#data_prevista");
const data_devolucao = document.querySelector("#data_devolucao");
const valor = document.querySelector("#valor");
const urlimg = document.querySelector("#image");
const form = document.querySelector(".edit");

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

    let idata_pLabel = document.createElement("label");
    idata_pLabel.setAttribute("name", "data_prevista")

    let idata_p = document.createElement("input");
    idata_p.type = "text";
    idata_p.setAttribute("name", "data_prevista");
    idata_p.setAttribute("id", "data_prevista");
    pdata_p.style.marginLeft = "4%";

    if (e.data_prevista != null) idata_p.placeholder = fordp;
    else idata_p.placeholder = "00/00/0000";

    ee3b.appendChild(ee3bimg);
    ee3b.appendChild(idata_pLabel);
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

    let idata_dLabel = document.createElement("label");
    idata_dLabel.setAttribute("name", "data_devolucao")

    let idata_d = document.createElement("input");
    idata_d.type = "text";
    idata_d.setAttribute("name", "data_devolucao");
    idata_d.setAttribute("id", "data_devolucao");
    idata_d.style.marginLeft = "4%";

    if (e.data_devolucao != null) idata_d.placeholder = fordd;
    else idata_d.placeholder = "00/00/0000";

    ee4b.appendChild(ee4bimg);
    ee4b.appendChild(idata_dLabel);
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
    let icobrancaLabel = document.createElement("label");
    icobrancaLabel.setAttribute("name", "valor")

    let icobranca = document.createElement("input");
    icobranca.setAttribute("name", "valor");
    icobranca.setAttribute("id", "valor");
    icobranca.placeholder = `R$ ${e.valor}`;
    icobranca.style.fontStyle = "normal";
    icobranca.style.marginLeft = "4%";

    eee2b.appendChild(eee2bimg);
    eee2b.appendChild(icobrancaLabel);
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

    btnAtualizar.addEventListener("click", (ev) => {
      ev.preventDefault()

      col2.style.display = "none";
      col1.style.display = "";

      const id_emprestimo = e.id_emprestimo;

      alterarItem(id_emprestimo);

      form.reset();
    });

    // atualiza data_prevista, data_devolucao e valor do livro
    function alterarItem(id_emprestimo) {
      let data_prevista = formDiv.querySelector("#data_prevista").value.trim();
      let data_devolucao = formDiv.querySelector("#data_devolucao").value.trim();
      let valor = formDiv.querySelector("#valor").value.trim();
    
      const bodyPATCH = {};
    
      if (data_prevista !== "") {
        bodyPATCH.data_prevista = data_prevista;
      }
    
      if (data_devolucao !== "") {
        bodyPATCH.data_devolucao = data_devolucao;
      }
    
      if (valor !== "") {
        bodyPATCH.valor = valor;
      }
    
      if (Object.keys(bodyPATCH).length > 0) {
        const optionsPATCH = {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bodyPATCH),
        };
    
        fetch(uri + "/emprestimo/" + id_emprestimo, optionsPATCH)
          .then((response) => {
            console.log(response);
            console.log("Data Prevista: " + data_prevista);
            console.log("Data Devolução: " + data_devolucao);
            console.log("Valor: " + valor);
          })
          .catch((err) => console.error(err));
      } else {
        console.log("No input values to update. PATCH request not sent.");
      }
    }

    // edit form div
    let formDiv = document.createElement("form");
    formDiv.className = "edit";

    formDiv.appendChild(ee3b);
    formDiv.appendChild(ee4b);
    formDiv.appendChild(eee2b);
    formDiv.appendChild(btnAtualizar);

    col2.appendChild(formDiv);

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

console.info("Script running");