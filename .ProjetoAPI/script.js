
elemento = document.getElementById("pesquisa");


let key = "9c6b7b9bc735f772b35e967ac095535c";
let bandeira = "https://flagsapi.com";
let imagem = "https://source.unsplash.com/1600x900/?city"


 x= document.getElementById("pesquisaClima")
 x.addEventListener('click', async function()
 {
     cidade = document.getElementById("cidade").value;
     const apiClimaURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${key}&lang=pt_br`;
     let respostaClima = await fetch(apiClimaURL)
     let objdados = await respostaClima.json()
     let temperatura = objdados.main.temp;
     let descricao = objdados.weather[0].description
     document.getElementById('resultado').innerText = 
                       `Hoje está ${temperatura} e ${descricao}`
 })


elemento.addEventListener('click', async function(){
    document.getElementById('resultado').innerText = ""
        var valor= document.getElementById("cep").value
        if (valor=='')
            alert("Informe o CEP");
        else
        {
            var cep = valor.replace(/\D/g, '');
            var validacep = /^[0-9]{8}$/;
       
            if(validacep.test(cep)) {
            var api= 'https://viacep.com.br/ws/'+cep+'/json/';
            let resposta = await fetch(api);
            dados = await  resposta.json();
            console.log(dados);
            if (dados.erro)
               document.getElementById('resultado').innerText = "CEP Não Existe";
            else
               document.getElementById('resultado').innerText = dados.logradouro + " "+ dados.bairro
                document.getElementById('cidade').value = dados.localidade
    
     }
          else
            if (!(resposta.ok))
                alert("cep inválido");
    }
    })