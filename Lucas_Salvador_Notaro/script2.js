let totalAdicionais = 0;
let valorCombo = 0;
let totalFinal = 0;

function calcularTotal() {
  valorCombo = Number(document.querySelector('input[type="radio"]:checked').value);
  calcularAdicionais();
  totalFinal = totalAdicionais + valorCombo
  document.getElementById("total").textContent = "Total: R$ " + totalFinal.toFixed(2);
}

function calcularAdicionais() {
  totalAdicionais = 0;

  let adicionais = document.querySelectorAll("input[name='adicionais']");
  for (let i = 0; i < adicionais.length; i = i + 1) {
    if (adicionais[i].checked == true) {
      totalAdicionais = totalAdicionais + parseFloat(adicionais[i].value);
    }
  }
}