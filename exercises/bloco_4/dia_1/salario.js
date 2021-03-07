let salarioBruto = 3000;
let iNSS = 0;
let iR = 0;
let salarioLiquido = 0;

if (salarioBruto <= 1556.94) {
    iNSS = salarioBruto - (salarioBruto * 0.08)
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    iNSS = salarioBruto - (salarioBruto * 0.09)
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    iNSS = salarioBruto - (salarioBruto * 0.11)
} else {
    iNSS = salarioBruto - 570.88
}

if (iNSS <= 1903.98) {
    salarioLiquido = iNSS
} else if (iNSS >= 1903.99 && 2826.65) {
    iR = iNSS * 0.075 - 142.80
    salarioLiquido = iNSS - iR
} else if (iNSS >= 3751.06 && 4664.68) {
    R = iNSS * 0.15 - 354.80
    salarioLiquido = iNSS - iR
} else if (iNSS >= 3751.06 && 4664.68) {
    iR = iNSS * 0.225 - 636.13
    salarioLiquido = iNSS - iR
} else if (iNSS >= 4664.68) {
    iR = iNSS * 0.275 - 869.36
    salarioLiquido = iNSS - iR
} 
console.log(iNSS);
console.log(salarioLiquido);