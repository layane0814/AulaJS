function exercicio2()
{
    let numero = Number( document.getElementById("numero").value);

    let celsius;
    celsius = (( Number(numero) - 32 ) * 5 )/9;

    document.getElementById("resultado").innerHTML = "<p>A temperatura em Celsius é " + celsius + "</p>";
}