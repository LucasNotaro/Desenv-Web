let totalAdicionais = 0;
let valorEntrega = 0;
let valorCombo = 0;
let totalFinal = 0;


function calcularTotal(){
    valorCombo = Number(document.getElementById('combos').value);
    valorEntrega = Number(document.getElementById('taxa').value);
    calcularAdicionais();
        totalFinal = totalAdicionais + valorCombo + valorEntrega;
    document.getElementById("mensagem").value = `Seu combo custará R$ ${valorCombo} com R$ ${totalAdicionais} de adicionais e R$ ${valorEntrega} de entrega`;
    document.getElementById("mensagem2").value = totalFinal
}


function calcularAdicionais(){
    totalAdicionais =0;
 
    let adicionais= document.querySelectorAll("input[name='adicionais']");
    console.log(adicionais);
    for (let i=0; i< adicionais.length; i= i+1)
    {
        if (adicionais[i].checked == true)
        {
            totalAdicionais = totalAdicionais + parseFloat(adicionais[i].value);
        }
    }
    alert(`Adicionais: ${totalAdicionais}`);
}