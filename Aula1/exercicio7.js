document.write("<h1>Aula 01 - Exercício 7</h1>");
document.write("<h3>Calculo da média aritmética</h3>");

var a1 = prompt("Digite a nota do primeiro aluno: ");
var a2 = prompt("Digite a nota do segundo aluno: ");
var a3 = prompt("Digite a nota do terceiro aluno: ");

var s = Number(a1)+Number(a2)+Number(a3) ;
var ma = Number(s)/3 ;

document.write("<p>A média aritmética é: " + ma + "</p>");


