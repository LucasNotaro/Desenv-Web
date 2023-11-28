function calcularMediaPonderada() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);


    if (isNaN(nota1) || isNaN(nota2)) {
        alert("Por favor, insira valores válidos para as notas.");
        return;
    }


    var mediaPonderada = (nota1 * 0.3) + (nota2 * 0.7);

    document.getElementById("resultado").textContent = mediaPonderada.toFixed(2);
}