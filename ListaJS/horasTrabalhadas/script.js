function calcularSalario() {
    var horasTrabalhadas = parseFloat(document.getElementById("horasTrabalhadas").value);
    var salarioHora = parseFloat(document.getElementById("salarioHora").value);
    var refeicoesFeitas = parseFloat(document.getElementById("refeicoesFeitas").value);

    if (isNaN(horasTrabalhadas) || isNaN(salarioHora) || isNaN(refeicoesFeitas)) {
        alert("Por favor, insira valores válidos para horas trabalhadas, salário por hora e refeições feitas.");
        return;
    }

    var salarioBruto;
    var descontoRefeicao = refeicoesFeitas * 1.5;
    
    if (horasTrabalhadas <= 40) {
        salarioBruto = horasTrabalhadas * salarioHora;
    } else {
        var horasExtras = horasTrabalhadas - 40;
        salarioBruto = (40 * salarioHora) + (horasExtras * salarioHora * 3);
    }

    var salarioLiquido = salarioBruto - descontoRefeicao;

    var resultadoTexto = "Salário bruto: R$ " + salarioBruto.toFixed(2) +
                        "<br>Desconto de refeições: R$ " + descontoRefeicao.toFixed(2) +
                        "<br>Salário líquido: R$ " + salarioLiquido.toFixed(2);

    document.getElementById("resultado").innerHTML = resultadoTexto;
}

