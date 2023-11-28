function calcularTotal() {
    var salarioAtual = parseFloat(document.getElementById('salario').value);
    var percentualAumento = parseFloat(document.getElementById('aumento').value);

    if (isNaN(salarioAtual) || isNaN(percentualAumento)) {
        alert('Por favor, insira valores numéricos válidos.');
        return;
    }

    var aumento = (salarioAtual * percentualAumento) / 100;
    var novoSalario = salarioAtual + aumento;

    document.getElementById('resultado').innerText = "Novo Salário: " + novoSalario.toFixed(2);
}
