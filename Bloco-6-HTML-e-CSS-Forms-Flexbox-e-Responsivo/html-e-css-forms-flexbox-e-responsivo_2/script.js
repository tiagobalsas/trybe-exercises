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

let date = new Pikaday({
  field: document.querySelector("#dataInicio"),
  format: "'D/M/YYYY'",
  toString(date, format) {
    // you should do formatting based on the passed format,
    // but we will just return 'D/M/YYYY' for simplicity
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    // dateString is the result of `toString` method
    const parts = dateString.split("/");
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  },
});

function stopDefAction() {
  const button = document.querySelector("#validate");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    let consolidado = document.querySelector("#consolidado");
    let selectAllInputs = document.querySelectorAll('input, #uf, textarea')
    selectAllInputs.forEach ((el)=>{
    let createElmenteP = document.createElement("p");
      createElmenteP.innerText = `${el.value}`;
      consolidado.appendChild(createElmenteP);
      console.log(el);
    })
      
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
