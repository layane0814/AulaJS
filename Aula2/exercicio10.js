function exercicio10()
{
    let v = Number( document.getElementById("v").value);
    let qht = Number( document.getElementById("qht").value);

    let s;
    s = Number(v)*Number(qht)*30 ;
    
    document.getElementById("resultado").innerHTML = "<p>O valor do salário é: " + s + "</p>";
}