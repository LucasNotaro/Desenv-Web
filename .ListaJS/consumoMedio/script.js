function calcularConsumo() {
    var distancia = parseFloat(document.getElementById("distancia").value);
    var litros = parseFloat(document.getElementById("litros").value);
    
    if (isNaN(distancia) || isNaN(litros) || litros === 0) {
        alert("Por favor, insira valores válidos para distância percorrida e litros gastos.");
        return;
    }

    var consumoMedio = distancia / litros;

    document.getElementById("resultado").innerText = consumoMedio.toFixed(2) + " km/l";
}