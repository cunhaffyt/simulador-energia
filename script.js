document.getElementById('calcularBtn').addEventListener('click', function() {
    // Obter o valor de consumo inserido pelo usuário
    var consumo = parseFloat(document.getElementById('consumo').value);
    
    // Validar se o valor inserido é um número válido
    if (isNaN(consumo) || consumo <= 0) {
        alert("Por favor, insira um valor válido para o consumo de energia.");
        return;
    }

    // Tarifas das empresas
    var empresas = [
        { nome: "EDP", preco_kwh: 0.22, taxa_extra: 00.00 },
        { nome: "ENDESA", preco_kwh: 0.14, taxa_extra: 00.00 },
        { nome: "GOLD ENERGY", preco_kwh: 0.17, taxa_extra: 00.00 }
		{ nome: "GALP", preco_kwh: 0.17, taxa_extra: 00.00 }
    ];

    // Calculando os preços
    var resultadoTexto = "Resultado: <br>";
    
    empresas.forEach(function(empresa) {
        var total = (consumo * empresa.preco_kwh) + empresa.taxa_extra;
        resultadoTexto += `${empresa.nome}: R$ ${total.toFixed(2)}<br>`;
    });

    // Exibindo o resultado
    document.getElementById('resultado').innerHTML = resultadoTexto;
});
