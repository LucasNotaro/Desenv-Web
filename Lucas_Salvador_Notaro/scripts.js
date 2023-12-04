function calcularTotal() {
    const promocoes = document.getElementsByName('lanche');
    const quantidades = document.querySelectorAll('input[type="text"]');
    const adicionais = document.querySelectorAll('input[type="checkbox"]');

    let total = 0;

    // Calcular total baseado na promoção selecionada e na quantidade
    for (let i = 0; i < promocoes.length; i++) {
        if (promocoes[i].checked) {
            const precoPromocao = parseFloat(promocoes[i].parentNode.textContent.trim().split(' ')[1]);
            const quantidade = parseFloat(quantidades[i].value);
            total += precoPromocao * quantidade;
        }
    }

    // Adicionar valores dos adicionais selecionados
    adicionais.forEach(adicional => {
        if (adicional.checked) {
            if (adicional.nextSibling.textContent.includes('Batata')) {
                total += 10;
            } else if (adicional.nextSibling.textContent.includes('Cebola')) {
                total += 5;
            }
        }
    });

    // Mostrar o total na página
    const totalLabel = document.querySelector('.total');
    totalLabel.textContent = `Total: R$ ${total.toFixed(2)}`;

    // Exemplo de desconto (10%)
    const desconto = total * 0.1;
    const totalComDesconto = total - desconto;

    const descontoLabel = document.querySelectorAll('.total')[1];
    const totalComDescontoLabel = document.querySelectorAll('.total')[2];

    descontoLabel.textContent = `Desconto: R$ ${desconto.toFixed(2)}`;
    totalComDescontoLabel.textContent = `Total com Desconto: R$ ${totalComDesconto.toFixed(2)}`;
}