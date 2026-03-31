function exercicio6()
{
    let qua = Number( document.getElementById("qua").value);
    let pp = Number( document.getElementById("pp").value);


    let subtotal, desconto, vf;
    subtotal = Number(qua)*Number(pp) ;
    desconto = Number(subtotal)*0.10 ;
    vf = Number(subtotal)-Number(desconto) ;

    document.getElementById("resultado").innerHTML = "<p>O subtotal é: " + subtotal + "</p>";
    document.getElementById("resultado").innerHTML = "<p>O valor do desconto é de: " + desconto + "</p>";
    document.getElementById("resultado").innerHTML = "<p>O valor a pagar é: " + vf + "</p>";
}