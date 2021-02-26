let salario_bruto = 3000;
let salario_base;
let salario_liquido;
let inss;
let ir;
let valor_parcela;

if (salario_bruto <= 0 && salario_bruto <= 1556.94) {
  salario_base = `Salário base R$${salario_bruto * 0.8}`;
  console.log(salario_base);
  inss = `Desconto INSS R$${salario_bruto * 0.92}`;
  console.log(inss);
  valor_parcela = `Parcella a deduzir do imposto R$${0.0}`;
  console.log(valor_parcela);
  ir = `Isento de imposto de renda`;
  console.log(ir);
} else if (salario_bruto > 1556.95 && salario_bruto < 2594.92) {
  if (salario_bruto > 1556.95 && salario_bruto <= 1903.98) {
    salario_base = `Salário base R$${salario_bruto * 0.91}`;
    console.log(salario_base);
    inss = `Desconto INSS R$${salario_bruto * 0.09}`;
    console.log(inss);
    valor_parcela = `Parcella a deduzir do imposto R$${0.0}`;
    console.log(valor_parcela);
    ir = `Isento de imposto de renda`;
    console.log(ir);
  } else {
    salario_base = `Salário base R$${salario_bruto * 0.91}`;
    console.log(salario_base);
    inss = `Desconto INSS R$${salario_bruto * 0.09}`;
    console.log(inss);
    valor_parcela = `Parcella a deduzir do imposto R$${142.8}`;
    console.log(valor_parcela);
    ir = `Valor do IR R$${(0.075 * salario_base) - valor_parcela}`;
    console.log(ir);
    salario_liquido = `Salário líguido R$${salario_base - ir}`;
    console.log(salario_liquido);
  }
} else if (salario_bruto >= 2594.93 && salario_bruto <= 5189.82) {
  if (salario_bruto >= 2826.66 && salario_bruto <= 3751.05) {
    salario_base = `Salário base R$${salario_bruto * 0.11}`;
    console.log(salario_base);
    inss = `Desconto INSS R$${salario_bruto * 0.89}`;
    console.log(inss);
    valor_parcela = `Parcella a deduzir do imposto R$${354.8}`;
    console.log(valor_parcela);
    ir = `Valor do IR R$${(salario_base * 0.15) - valor_parcela}`;
    console.log(ir);
    salario_liquido = `Salário líguido R$${salario_base - ir}`;
    console.log(salario_liquido);
  } else if (salario_bruto >= 3751.06 && salario_bruto <= 4664.68) {
    salario_base = `Salário base R$${salario_bruto * 0.11}`;
    console.log(salario_base);
    inss = `Desconto INSS R$${salario_bruto * 0.775}`;
    console.log(inss);
    valor_parcela = `Parcella a deduzir do imposto R$${636.13}`;
    console.log(valor_parcela);
    ir = `Valor do IR R$${(salario_base * 0.225) - valor_parcela}`;
    console.log(ir);
    salario_liquido = `Salário líguido R$${salario_base - ir}`;
    console.log(salario_liquido);
  } else {
    salario_base = `Salário base R$${salario_bruto * 0.11}`;
    console.log(salario_base);
    inss = `Desconto INSS R$${salario_bruto * 0.755}`;
    console.log(inss);
    valor_parcela = `Parcella a deduzir do imposto R$${636.13}`;
    console.log(valor_parcela);
    ir = `Valor do IR R$${(salario_base * 0.275 )- valor_parcela}`;
    console.log(ir);
    salario_liquido = `Salário líguido R$${salario_base - ir}`;
    console.log(salario_liquido);
  }
} else {
  salario_base = `Salário base R$${salario_bruto - 570.88}`;
  console.log(salario_bruto);
  inss = `Desconto INSS R$${570.78}`;
  console.log(inss);
  valor_parcela = `Parcella a deduzir do imposto R$${869.36}`;
  console.log(valor_parcela);
  ir = `Valor do IR R$${(salario_base * 0.275) - valor_parcela}`;
  console.log(ir);
  salario_liquido = `Salário líguido R$${salario_base - ir}`;
  console.log(salario_liquido);
}

