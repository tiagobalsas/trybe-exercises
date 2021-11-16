//Desenvolva uma HOF que retorna o resultado de um sorteio.

const resultado = () => {};
const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const aposta = [2,1,3,1,4]

console.log(getRandom(1,5));
