/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
 Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F */

let nota;
let percentagem = 101;

if (percentagem >= 90 && percentagem <= 100) {
  console.log("A");
} else if (percentagem >= 80 && percentagem <= 90) {
  console.log("B");
} else if (percentagem >= 70 && percentagem <= 80) {
  console.log("C");
} else if (percentagem >= 60 && percentagem <= 70) {
  console.log("D");
} else if (percentagem >= 50 && percentagem <= 60) {
  console.log("E");
} else if (percentagem < 50 && percentagem >= 0) {
  console.log("F");
} else {
  console.log(`Erro! O Valor ${percentagem} não é aceito! `);
}
