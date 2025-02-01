document.getElementById("calcularBtn").addEventListener("click", function() {
    // Obtendo o valor do consumo de energia (em kWh)
    var consumo = parseFloat(document.getElementById("consumo").value);

    // Verificando se o consumo é um número válido
    if (isNaN(consumo) || consumo <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um valor de consumo válido.";
        return;
    }

    // Definindo os preços de energia para cada empresa
    var empresas = [
        { nome: "EDP", preco: 0.22 },
        { nome: "Galp", preco: 0.19 },
        { nome: "Gold Energy", preco: 0.17 },
        { nome: "Endesa", preco: 0.14 }
    ];

    // Calculando o valor total para cada empresa
    var resultados = empresas.map(function(empresa) {
        var total = consumo * empresa.preco;
        return { nome: empresa.nome, total: total };
    });

    // Encontrando o preço mais caro e o mais barato
    var precoMaisCaro = Math.max(...resultados.map(result => result.total));
    var precoMaisBarato = Math.min(...resultados.map(result => result.total));

    // Calculando a diferença entre o preço mais caro e o mais barato
    var diferenca = precoMaisCaro - precoMaisBarato;

    // Exibindo a diferença diretamente na caixa de resultado
    document.getElementById("resultado").innerHTML = `A diferença entre os preços é R$ ${diferenca.toFixed(2)}.`;

});
