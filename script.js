document.getElementById('calcularBtn').addEventListener('click', function() {
    // Obter o valor de consumo inserido pelo usuário
    var consumo = parseFloat(document.getElementById('consumo').value);
    
    // Validar se o valor inserido é um número válido
    if (isNaN(consumo) || consumo <= 0) {
        alert("Por favor, insira um valor válido para o consumo de energia.");
        return;
    }

    // Tarifas das empresas em Euro (€) para o kWh
    var empresas = [
        { nome: "EDP", preco_kwh: 0.22 },
        { nome: "ENDESA", preco_kwh: 0.14 },
        { nome: "GOLD ENERGY", preco_kwh: 0.17 },
        { nome: "GALP", preco_kwh: 0.17 }
    ];

    // Calculando os preços para cada empresa
    var resultados = empresas.map(function(empresa) {
        var total = consumo * empresa.preco_kwh;
        return {
            nome: empresa.nome,
            preco: total
        };
    });

    // Encontrar o menor e maior preço
    var menorPreco = Math.min(...resultados.map(emp => emp.preco));
    var maiorPreco = Math.max(...resultados.map(emp => emp.preco));

    // Calculando a diferença entre o menor e maior preço
    var diferencaPreco = maiorPreco - menorPreco;

    // Construindo a string de resultado
    var resultadoTexto = "<h3>Resultados por Empresa:</h3>";
    resultados.forEach(function(result) {
        resultadoTexto += `${result.nome}: € ${result.preco.toFixed(2)}<br>`;
    });

    resultadoTexto += `<br><strong>Diferença de preço:</strong> € ${diferencaPreco.toFixed(2)}`;

    // Exibindo o resultado
    document.getElementById('resultado').innerHTML = resultadoTexto;
});
