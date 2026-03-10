document.write("<h1>Aula 01 - Exercício 8</h1>");
document.write("<h3>Calculo do IMC</h3>");

var p = prompt("Digite o peso (em Kg): ");
var a = prompt("Digite a aultura (em metros): ");

var imc = Number(p)/(Number(a)*Number(a)) ;

document.write("<p>O valor do IMC é: " +  imc + "</p>");
