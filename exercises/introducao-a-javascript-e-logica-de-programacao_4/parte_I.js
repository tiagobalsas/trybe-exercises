let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
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
