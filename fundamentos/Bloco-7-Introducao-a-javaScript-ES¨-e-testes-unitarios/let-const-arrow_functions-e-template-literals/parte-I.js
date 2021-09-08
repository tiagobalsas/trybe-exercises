const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = `${ifScope}\n ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
  // console.log(ifScope + " o que estou fazendo aqui ? :O"); // Se necessário esta linha pode ser removida.
};

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const orderNumbers = (x) => {
  let aux;
  for (let index = 0; index < oddsAndEvens.length; index += 1) {
    for (let indice = 0; indice < oddsAndEvens.length - index; indice += 1) {
      if (oddsAndEvens[indice] > oddsAndEvens[indice + 1]) {
        aux = oddsAndEvens[indice + 1];
        oddsAndEvens[indice + 1] = oddsAndEvens[indice];
        oddsAndEvens[indice] = aux;
      }
    }
  }
  return oddsAndEvens;
};

console.log(`${orderNumbers(oddsAndEvens)}`);
