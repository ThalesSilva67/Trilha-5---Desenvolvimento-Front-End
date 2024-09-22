// Função para alternar a classe 'active' no menu
function toggleMenu() {
    // Obtém o elemento com o ID 'menu'
    var menu = document.getElementById("menu");
    // Alterna a classe 'active', adicionando-a se não estiver presente, ou removendo-a se estiver
    menu.classList.toggle("active");
}

// Função para calcular o IMC (Índice de Massa Corporal)
function calcularIMC() {
    // Obtém o valor do peso e altura, convertendo para float
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    // Obtém o elemento onde o resultado será exibido
    var resultado = document.getElementById("resultado");

    // Verifica se os valores de peso e altura são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        // Exibe uma mensagem de erro caso os valores sejam inválidos
        resultado.textContent = "Por favor, insira valores válidos.";
    } else {
        // Calcula o IMC usando a fórmula IMC = peso / (altura * altura)
        var imc = peso / (altura * altura);
        var classificacao;

        // Classifica o IMC de acordo com os padrões estabelecidos
        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = "Peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = "Sobrepeso";
        } else if (imc >= 30 && imc < 34.9) {
            classificacao = "Obesidade grau 1";
        } else if (imc >= 35 && imc < 39.9) {
            classificacao = "Obesidade grau 2";
        } else {
            classificacao = "Obesidade grau 3";
        }

        // Exibe o resultado do IMC e a classificação correspondente
        resultado.textContent = "Seu IMC é: " + imc.toFixed(2) + ". Classificação: " + classificacao + ".";
    }
}
