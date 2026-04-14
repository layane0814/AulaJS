function exercicio11()
{
    let valor_km = Number( document.getElementById("valor_km").value);
    let km_per = Number( document.getElementById("km_per").value);
    let min = Number( document.getElementById("min").value);

    let total;
    total = (Number(valor_km)*Number(km_per))+(Number(min)*0.50) ;
    
    document.getElementById("resultado").innerHTML = "<p>O valor total da corrida é: " + total + "</p>";
}