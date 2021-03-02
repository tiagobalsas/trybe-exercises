let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

let obj = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

console.log(`Bem-vinda, ${info.personagem}`);
console.log(info);

for (prop in info) {
  console.log(prop);
}

for (prop in info) {
  console.log(info[prop]);
}

console.log(`
${info.personagem} e ${obj.personagem}
${info.origem} e ${obj.origem}
${info.nota} e ${obj.nota}
Ambos recorentes: ${info.recorrente}`);
