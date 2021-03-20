const uf = {
  AC: "Acre",
  AL: "Alagoas",
  AP: "Amapá",
  AM: "Amazonas",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goías",
  MA: "Maranhão",
  MT: "Mato Grosso",
  MS: "Mato Grosso do Sul",
  MG: "Minas Gerais",
  PA: "Pará",
  PB: "Paraíba",
  PR: "Paraná",
  PE: "Pernambuco",
  PI: "Piauí",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul",
  RO: "Rondônia",
  RR: "Roraíma",
  SC: "Santa Catarina",
  SP: "São Paulo",
  SE: "Sergipe",
  TO: "Tocantins",
};
function creatUF(uf) {
  const estados = uf;
  // estados.innerHTML = uf;
  for (key in estados) {
    const listaUF = document.querySelector("#uf");
    const ufs = document.createElement("option");
    ufs.innerHTML = estados[key];
    ufs.id = key.toLowerCase();
    ufs.value = key.toLowerCase();
    listaUF.appendChild(ufs);
  }
}
creatUF(uf);

let date = new Pikaday({ field: document.querySelector("#dataInicio") });

let formConsolidado = {};
function validadeData() {
  const button = document.querySelector("#validate");
  button.addEventListener("click", () => {
    const valuesForm = document.querySelectorAll("#form input");
    valuesForm.values();
    valuesForm.forEach((indice) => {
      let listInput = indice.value;
      if (listInput === "") {
        alert("campo vazio");
        onfocus(listInput);
      } else {
        formConsolidado[indice.getAttribute("data-key")] = indice.value;
      }
    });
  });
}
validadeData();

function stopDefAction() {
  const button = document.querySelector("#validate");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    let consolidado = document.querySelector("#consolidado");
    for (let key in formConsolidado) {
      let createElmenteP = document.createElement("p");
      createElmenteP.innerText = `${key} : ${formConsolidado[key]}`;
      consolidado.appendChild(createElmenteP);
    }
  });
}

stopDefAction();

function clearData() {
  let btnClear = document.querySelector("#clear");
  btnClear.addEventListener("click", (event) => {
    event.preventDefault();
    let consolidado = document.querySelector("#consolidado");
    consolidado.innerHTML = "";
  });
}
clearData();
