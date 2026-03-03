document.write("<h1>Aula 01 - Exercício 2</h1>");

var numero = prompt("Digite a temperatura em graus Fahrenheit: ");

var celcius = (( Number(numero) - 32 ) * 5 )/9;

document.write("<p> A temperatura em celsius é " + celcius + "</p>");