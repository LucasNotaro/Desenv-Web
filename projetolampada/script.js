let lampada = document.getElementById('lampada');


function ligar()
{
lampada.src= "./img/luzLigada.gif";
console.log(lampada)
}

function desligar()
{
    lampada.setAttribute("src", "./img/luzDesligada.gif" );
}

function sumir()
{
lampada.hidden = true;
//lampada.style.display = "none";
}

function aparecer(){
document.getElementById("titulo").style.color = "red";
lampada.hidden = false;
//lampada.style.display = "inline";
}  

function alternar()
{
if (lampada.getAttribute("src") == "./img/luzLigada.gif")
    desligar ();

else if (lampada.getAttribute("src") == "./img/luzDesligada.gif")
    ligar();
}

function piscar()
{
alternar()
} setInterval(piscar,500);