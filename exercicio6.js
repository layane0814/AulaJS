document.write("<h1>Aula 01 - Exercício 6</h1>");
document.write("<h3>Calculo de área de um quadrado</h3>");

var qua = prompt("Digite a quantidade do produto: ");
var pp = prompt("Digite o preço do produto: ");

var subtotal = Number(qua)*Number(pp) ;
var desconto = Number(subtotal)*0.10 ;
var vf = Number(subtotal)-Number(desconto) ;

document.write("<p>O subtotal é: " +  subtotal + "</p>");
document.write("<p>O valor do desconto é de: " + desconto + "</p>");
document.write("<p>O valor a pagar é: " + vf + "</p>");
