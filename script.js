document.getElementById("calcularBtn").addEventListener("click", function() {
    // Obtendo o valor do consumo de energia (em kWh)
    var consumo = parseFloat(document.getElementById("consumo").value);

    // Verificando se o consumo é um número válido
    if (isNaN(consumo) || consumo <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um valor de consumo válido.";
        return;
    }

    // Definindo os preços de energia para cada empresa (exemplo)
    var precoEmpresa1 = 0.50;  // Preço por kWh da empresa 1
    var precoEmpresa2 = 0.45;  // Preço por kWh da empresa 2

    // Calculando o valor total para cada empresa
    var totalEmpresa1 = consumo * precoEmpresa1;
    var totalEmpresa2 = consumo * precoEmpresa2;

    // Calculando a diferença de preço entre as duas empresas
    var diferenca = totalEmpresa1 - totalEmpresa2;

    // Exibindo o resultado
    document.getElementById("resultado").innerHTML = "A diferença de preço é de R$ " + diferenca.toFixed(2) + " (Empresa 1 é mais cara).";
});
