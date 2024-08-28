//INICIO DO JS DE TREINAMENTO

// Função 1: Inserir números
function inserirNumeros() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
    let numero3 = parseFloat(prompt("Digite o terceiro número:"));
    return { numero1, numero2, numero3 };
}

// Função 2: Verificar se estão em Progressão Aritmética
function verificarProgressaoAritmetica(n1, n2, n3) {
    let diferenca1 = n2 - n1;
    let diferenca2 = n3 - n2;
    return diferenca1 === diferenca2;
}

// Função 3: Mostrar o resultado
function mostrarResultado(emPA) {
    if (emPA) {
        console.log("Os números estão em progressão aritmética.");
    } else {
        console.log("Os números não estão em progressão aritmética.");
    }
}

// Função principal: Integração de todas as etapas
function verificarPA() {
    const numeros = inserirNumeros();
    const emPA = verificarProgressaoAritmetica(numeros.numero1, numeros.numero2, numeros.numero3);
    mostrarResultado(emPA);
}

// Chama a função principal para executar o processo
verificarPA();

//FINAL DO JS DE TREINAMENTO