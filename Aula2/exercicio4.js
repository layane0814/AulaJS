function exercicio4()
{
    let b = Number( document.getElementById("b").value);
    let a = Number( document.getElementById("a").value);

    let area;
    area = (Number(b)*Number(a)/2) ;

    document.getElementById("resultado").innerHTML = "<p>O valor da área triangulo é " + area + "</p>";
}
