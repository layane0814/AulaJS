document.write("<h1>Aula 01 - Exercício 9</h1>");
document.write("<h3>Calculo do montante de juros</h3>");

var vi = prompt("Digite o valor inicial (principal): ");
var ju = prompt("Digite a taxa de juros (em porcntagem): ");
var tp = prompt("Digite o tempo (em anos): ");

var m = Number(vi)*(1+ (Number(ju)*Number(tp))) ;

document.write("<p>O valor do montante de juros é: " +  m + "</p>");
