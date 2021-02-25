/* Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.*/
const num1 = 4;
const num2 = 5;
const num3 = 3;


if(num1 > num2 && num1 > num3) {
    console.log(num1 + ' é maior que ' + num2 + ' e maior que ' + num3);
} else if (num2 > num1 && num2 > num3) {
    console.log(num2 + ' é maior que ' + num1 + ' e maior que ' + num3)
} else {
    console.log(num3 + ' é maior que ' + num1 + ' e maior que ' + num2)
}