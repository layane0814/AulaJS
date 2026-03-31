function exercicio7()
{
    let a1 = Number( document.getElementById("a1").value);
    let a2 = Number( document.getElementById("a2").value);
    let a3 = Number( document.getElementById("a3").value);


    let s, ma;
    s = Number(a1)+Number(a2)+Number(a3) ;
    ma = Number(s)/3 ;

    document.getElementById("resultado").innerHTML = "<p>A média aritmétrica é: " + ma + "</p>";
}