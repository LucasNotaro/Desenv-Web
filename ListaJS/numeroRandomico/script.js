function numeroRandomico() {
    const numeroAleatorio = Math.floor(Math.random() * 1000000) + 1;
    document.getElementById('numero').innerText = numeroAleatorio;
    document.getElementById('numExibido').innerText = numeroAleatorio;
    document.getElementById('textoNumero').style.display = 'inline';
    document.getElementById('textoParOuImpar').style.display = 'inline';

    if (numeroAleatorio % 2 === 0) {
        document.getElementById('parOuImpar').innerText = 'par';
    } else {
        document.getElementById('parOuImpar').innerText = 'ímpar';
    }
}