/* Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário. */

/* let a = 60;
let b = 60;
let c = 60;

if ((a + b + c) / 2 === 90) {
  console.log(true + ' Retângulo possui um ângulo de 90º');
} else if ((a + b + c) / 2  < 90) {
  console.log(true + ' Acutângulo - possui um ângulo menor que 90º');
} else if ((a + b + c) / 2  > 90) {
    console.log(true + ' Obtusângulo = possui um ângulo maior que 90º')
} else {
    console.log(false)
} */

/* let a = 60;
let b = 60;
let c = 60;

if (a + b + c === 180) {
    console.log(true)
} else {
    console.log(false)
} */

/* 
if ( a + b + c === 180 ) {
    if ( ) {
        
    } else if (a === b || c != a) {
        console.log(true + ' Isósceles: possui dois de seus lados com medidas iguais.'
    } else if (a != b && c != a){
    }
    else {
      console.log(false)
    }
  } */

let a = 40;
let b = 40;
let c = 100;

if (a + b + c === 180) {
  if (a === b && c === a) {
    console.log(
      true + " - Equilátero: possui todos os lados com mesma medida."
    );
  } else if (a === b && c != a) {
    console.log(
      true + " - Isósceles: possui dois de seus lados com medidas iguais."
    );
  } else if (a != b && c != a) {
    console.log(true + " - Escaleno: os lados possuem medidas diferentes.");
  }
} else {
  console.log(false);
}
