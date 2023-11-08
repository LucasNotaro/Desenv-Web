let valorPacote;
let totalAdicionais;
 
function calcularTotalViagem(){
    calcularPacote();
    calcularAdicionais();
    let totalFinal = totalAdicionais + valorPacote;
    nome= document.getElementById('nome').value
    document.getElementById("mensagem").innerHTML = `${nome} irá pagar ${valorPacote} pelo pacote e ${totalAdicionais} pelos adicionais `;
 
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
 
function calcularPacote()
{
    let qtdPacotes = document.querySelectorAll("input[name='pacotes']").length;
    //console.log(qtdPacotes);
 
    let pacotes = document.querySelectorAll("input[name='pacotes']");  
    //console.log(pacotes);
 
  //let valor =  document.querySelector("input[name='pacotes']:checked").value;
    //            i < pacotes.length
    for (var i=0; i < qtdPacotes; i++)
    {
        if (   pacotes[i].checked == true    )
        {
          //  console.log(pacotes[i].value);
            valorPacote = Number(pacotes[i].value);
            break;
        }
    }
}

// let valor = document.querySelector("input[name='pacotes']:checked").value;


calcularAdicionais();
    valorEntrega();
    let totalFinal = valorEntrega + totalAdicionais;
    nome= document.getElementById('nome').value
    document.getElementById("mensagem").innerHTML = `${nome} irá pagar ${valorEntrega} pela entrega e ${totalAdicionais} pelos adicionais `;
}






function totalCombo(){
    var combo = document.querySelector("select").value;
    var PrecoCombo = parseInt(combo);

}

function CalcularEntrega()
{
    let taxa = document.querySelectorAll("input[name='Entrega?']").length;
    let valor =  document.querySelector("input[name='Entrega?']:checked").value;

    for (var i=0; i < taxa; i++)
    {
        if (Entrega[i].checked == true)
        {
            valorEntrega = Number(Entrega[i].value);
            break;
        }
    }
}





