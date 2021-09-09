/* Escreva um programa que defina três números em variáveis no seu começo
 e retorne true se pelo menos uma das três for par. 
 Caso contrário, ele retorna false . */

let a = 2;
let b = 1;
let c = 1;

let isTrue = false;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
  isTrue = true;
} else isTrue = false;

console.log(isTrue);
