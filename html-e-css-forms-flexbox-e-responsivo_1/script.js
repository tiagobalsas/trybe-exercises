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

function validateDate() {
  const date = document.querySelector("#dataInicio");
  date.addEventListener("change", () => {
    const getDate = date.value;
    const day = parseInt(getDate.slice(0, 2));
    const month = parseInt(getDate.slice(3, 5));
    const year = parseInt(getDate.slice(6, 10));
    if (day >= 1 && day <= 31 && month >= 1 && month <= 12 && year > 1900) {
      return true;
    } else alert("data inválida");
  });
}
validateDate();

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
