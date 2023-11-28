        function calcularArea() {
            var base = parseFloat(document.getElementById('base').value);
            var altura = parseFloat(document.getElementById('altura').value);

            if (isNaN(base) || isNaN(altura)) {
                alert('Por favor, insira valores numéricos válidos.');
                return;
            }

            var area = (base * altura) / 2;

            document.getElementById('resultado').value = area.toFixed(2);
        }