/*[JS-A02] Escreva um programa em JavaScript que solicite ao usuário o nome, altura em centímetros e peso de uma pessoa. O programa deve calcular o índice de massa corporal (IMC) dessa pessoa, considerando a fórmula IMC = peso / (altura * altura), onde a altura deve ser convertida de centímetros para metros. Em seguida, o programa deve classificar o peso com base no IMC calculado, de acordo com a tabela a seguir:

Menor que 16: Baixo peso muito grave
De 16 a 16.99: Baixo peso grave
De 17 a 18.49: Baixo peso
De 18.50 a 24.99: Peso normal
De 25 a 29.99: Sobrepeso
De 30 a 34.99: Obesidade grau I
De 35 a 39.99: Obesidade grau II
Maior ou igual a 40: Obesidade grau III
O programa deve exibir o nome da pessoa, o índice de massa corporal calculado e a classificação correspondente*/

let nome = prompt("Digite seu nome");
let altura = prompt("Digite sua altura em centímetros");
let peso = prompt("Digite seu peso em kg");

altura = parseFloat(altura) / 100;
peso = parseFloat(peso);

let imc = peso / (altura * altura);

let classificacao;

if (imc < 16) {
    classificacao = "Baixo peso muito grave";
} else if (imc >= 16 && imc < 17) {
    classificacao = "Baixo peso grave";
} else if (imc >= 17 && imc < 18.5) {
    classificacao = "Baixo peso";
} else if (imc >= 18.5 && imc < 25) {
    classificacao = "Peso normal";
} else if (imc >= 25 && imc < 30) {
    classificacao = "Sobrepeso";
} else if (imc >= 30 && imc < 35) {
    classificacao = "Obesidade grau I";
} else if (imc >= 35 && imc < 40) {
    classificacao = "Obesidade grau II";
} else {
    classificacao = "Obesidade grau III";
}

console.log(`Nome: ${nome}, IMC: ${imc.toFixed(2)}, Classificação: ${classificacao}`);





