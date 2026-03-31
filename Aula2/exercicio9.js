function exercicio9()
{
    let vi = Number( document.getElementById("vi").value);
    let ju = Number( document.getElementById("ju").value);
    let tp = Number( document.getElementById("tp").value);

    let m;
    m = Number(vi)*(1+ (Number(ju)*Number(tp))) ;

    document.getElementById("resultado").innerHTML = "<p>O valor do montante é: " + m + "</p>";
}