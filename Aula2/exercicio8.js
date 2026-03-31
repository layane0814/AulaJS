function exercicio8()
{
    let p = Number( document.getElementById("p").value);
    let a = Number( document.getElementById("a").value);

    let imc;
    imc = Number(p)/(Number(a)*Number(a)) ;

    document.getElementById("resultado").innerHTML = "<p>O IMC é: " + imc + "</p>";
}