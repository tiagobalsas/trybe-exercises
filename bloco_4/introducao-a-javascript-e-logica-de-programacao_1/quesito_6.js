/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

- Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas
quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

- Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .

- Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop -> diagonals */

let peca = "rei";
let peca_xadrex = peca.toLowerCase();
let posicao = "DIREITA";
let movimento = posicao.toLowerCase();

if (peca_xadrex) {
  if (movimento === "horizontal") {
    console.log(`${peca_xadrex} avançou para ${posicao}`);
  } else if (movimento === "vertical") {
    console.log(`${peca_xadrex} avançou para ${posicao}`);
  } else if (movimento === "diagonal") {
    console.log(`${peca_xadrex} avançou para ${posicao}`);
  } else {
    console.log(
      `${posicao} não existe! O ${peca_xadrex} pode mover-se para horizontal, vertical e diagonal`
    );
  }
}
