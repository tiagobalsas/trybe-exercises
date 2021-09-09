/* Escreva um programa que defina três números em variáveis no seu começo
 e retorne true se pelo menos uma das três for ímpar. 
 Caso contrário, ele retorna false . */

let a = 2;
let b = 2;
let c = 2;

let isFalse = false;

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
  isFalse = true;
}

console.log(isFalse);
