let salario_bruto = 1500.1;
let salario_base;
let salario_liquido;
let inss;
let ir;
let valor_parcela;

if (salario_bruto <= 1556.94) {
    salario_base = `Salário base R$${salario_bruto * 0.8}`;
    console.log(salario_base);
    inss = `Desconto INSS R$${salario_bruto * 0.02}`;
    console.log(inss);
    valor_parcela = `Parcella a deduzir do imposto R$${0.0}`;
    console.log(valor_parcela);
    ir = `Isento de imposto de renda`;
    console.log(ir);
} else if (salario_bruto > 1556.95 && salario_bruto < 2594.92) {
    if (salario_bruto > 1556.95 && salario_bruto <= 1903.98) {
        salario_base = `Salário base R$${salario_bruto * 0.9}`;
        console.log(salario_base);
        inss = `Desconto INSS R$${salario_bruto * 0.03}`;
        console.log(inss);
        valor_parcela = `Parcella a deduzir do imposto R$${0.0}`;
        console.log(valor_parcela);
        ir = `Isento de imposto de renda`;
        console.log(ir);
    } else {
        salario_base = `Salário base R$${salario_bruto * 0.9}`;
        console.log(salario_base);
        inss = `Desconto INSS R$${salario_bruto * 0.03}`;
        console.log(inss);
        valor_parcela = `Parcella a deduzir do imposto R$${142.8}`;
        console.log(valor_parcela);
        ir = `Valor do IR R$${(0.075 * salario_base) - 142.8}`;
        console.log(ir);
        salario_liquido = `Salário líguido R$${salario_base - ir}`
        console.log(salario_liquido)
    }
}

/* else if (salario_bruto >= 2594.93 && salario_bruto <= 5189.82) {
    salario_base = `Salário base R$${salario_bruto * 0.9}`;
    console.log(salario_base);
    inss = `Desconto INSS R$${salario_bruto * 0.03}`;
    console.log(inss);
    valor_parcela = `Parcella a deduzir do imposto R$${0.0}`;
    console.log(valor_parcela);
    ir = `Isento de imposto de renda`;
    console.log(ir);
} */
