document.write("<h1>Aula 01 - Exercício 2</h1>");
document.write("<h3>Calculo de temperatura em graus fahrenheit para celsius</h3>");

var numero = prompt("Digite a temperatura em graus Fahrenheit: ");

var celcius = (( Number(numero) - 32 ) * 5 )/9;

document.write("<p> A temperatura em celsius é " + celcius + "</p>");