let totalAdicionais = 0;
let valorCombo = 0;
let totalFinal = 0;

function calcularTotal() {
    let quantidadeCombo1 = parseInt(document.getElementById("qtdCombo1").value); // usar "|| 0;" (sem aspas) para considerar 0 caso não seja inserido um valor
    let quantidadeCombo2 = parseInt(document.getElementById("qtdCombo2").value);
    let quantidadeCombo3 = parseInt(document.getElementById("qtdCombo3").value);
  
    valorCombo = 0;
    if (document.getElementById('combo1').checked) {
      valorCombo = Number(document.getElementById('combo1').value) * quantidadeCombo1;
    } else if (document.getElementById('combo2').checked) {
      valorCombo = Number(document.getElementById('combo2').value) * quantidadeCombo2;
    } else if (document.getElementById('combo3').checked) {
      valorCombo = Number(document.getElementById('combo3').value) * quantidadeCombo3;
    }
  
    calcularAdicionais();
    totalFinal = totalAdicionais + valorCombo;
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
