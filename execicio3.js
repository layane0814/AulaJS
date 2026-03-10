document.write("<h1>Aula 01 - Exercício 3</h1>");
document.write("<h3>Calculo para valor de parcela</h3>");

var valor = prompt("Digite o valor da prestação em atraso: ");
var taxa = prompt("Digite a taxa de juros (em porcentagem): ");
var tempo = prompt("Digite o tempo de dias de atraso: ");

var vpar = Number(valor) + (Number(valor)*((Number(taxa)*Number(taxa))/100)*Number(tempo)) ;

document.write("<p>O valor da prestação e atrasos é " + valor + "</p>");
document.write("<p>A taxa de juros é " + taxa + "</p>");
document.write("<p>O tempo de dias de atrasos é " + tempo + "</p>");

document.write("<p style='color : blue'>O valor da parcela é " + vpar + "</p>");