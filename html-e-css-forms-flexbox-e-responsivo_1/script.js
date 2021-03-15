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
