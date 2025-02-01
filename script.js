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

    // Gerando o HTML para exibir as empresas e preços
    var resultadoHtml = "<ul>";
    resultados.forEach(function(result) {
        resultadoHtml += `<li>${result.nome}: R$ ${result.total.toFixed(2)}</li>`;
    });
    resultadoHtml += "</ul>";

    // Exibindo os resultados na modal
    document.getElementById("resultado").innerHTML = resultadoHtml;

    // Exibindo a modal
    var modal = document.getElementById("modal");
    modal.style.display = "block";
});

// Fechar a modal quando clicar no "X"
document.getElementById("closeModal").addEventListener("click", function() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
});

// Fechar a modal se o usuário clicar fora da área da modal
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
