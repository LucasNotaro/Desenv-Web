function calcularIdade() {
    var dataNascimento = document.getElementById("data").value;
    var partesData = dataNascimento.split('/');
    
    if (partesData.length !== 3 || partesData[0].length !== 2 || partesData[1].length !== 2 || partesData[2].length !== 4) {
        alert("Por favor, insira a data no formato correto: DD/MM/AAAA");
        return;
    }

    var nascimento = new Date(partesData[2], partesData[1] - 1, partesData[0]);

    var dataAtual = new Date();
    var diferencaEmMilissegundos = dataAtual - nascimento;

    var idadeEmAnos = diferencaEmMilissegundos / (1000 * 60 * 60 * 24 * 365.25);

    var anos = Math.floor(idadeEmAnos);
    var meses = Math.floor((idadeEmAnos % 1) * 12);
    var dias = Math.floor((idadeEmAnos % 1) * 365.25);
    
    var horas = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60) % 24);
    var minutos = Math.floor(diferencaEmMilissegundos / (1000 * 60) % 60);
    var semanas = Math.floor(dias / 7);

    var idadeEm2050 = 2050 - nascimento.getFullYear();

    var resultado = "Idade Aproximada:\n" +
                    "Anos: " + anos + "\n" +
                    "Meses: " + meses + "\n" +
                    "Dias: " + dias + "\n" +
                    "Horas: " + horas + "\n" +
                    "Minutos: " + minutos + "\n" +
                    "Semanas: " + semanas + "\n" +
                    "Idade em 2050: " + idadeEm2050;

    alert(resultado);
}
