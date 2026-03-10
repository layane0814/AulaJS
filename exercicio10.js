document.write("<h1>Aula 01 - Exercício 10</h1>");
document.write("<h3>Calculo do salário</h3>");

var v = prompt("Digite o valor da hora: ");
var qht = prompt("Digite a quantidade de horas trabalhadas por dia: ");

var s = Number(v)*Number(qht)*30 ;

document.write("<p>O valor do salário é: " +  s + "</p>");
