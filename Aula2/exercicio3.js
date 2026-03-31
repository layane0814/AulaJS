function exercicio3()
{
    let valor = Number( document.getElementById("valor").value);
    let taxa = Number( document.getElementById("taxa").value);
    let tempo = Number( document.getElementById("tempo").value);


    let valorpar;
    valorpar = Number(valor) + (Number(valor)*((Number(taxa)*Number(taxa))/100)*Number(tempo)) ;

    document.getElementById("resultado").innerHTML = "<p>O valor da parcela é " + valorpar + "</p>";
}
