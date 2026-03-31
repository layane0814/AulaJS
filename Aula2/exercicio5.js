function exercicio5()
{
    let vqua = Number( document.getElementById("vqua").value);

    let area;
    area = Number(vqua)*Number(vqua) ;

    document.getElementById("resultado").innerHTML = "<p>O valor da área do quadrado é " + area + "</p>";
}