// Função para gerar 6 números aleatórios diferentes entre 1 e 100 em ordem crescente
function gerarNumerosAleatorios() {
    const numeros = [];
    while (numeros.length < 6) { // Quando o array estiver menos de 6 números.
        const numero = Math.floor(Math.random() * 100) + 150; // Gera um número aleatório entre 150 e 250.
        if (!numeros.includes(numero)) { // Verifica se o número gerado ainda não está no array.
        numeros.push(numero); // Adiciona o número ao array se não estiver repitido.
    }
}
// Ordena os números em ordem crescente 
numeros.sort((a, b)  => a - b); // Utiliza a função de ordenação para ordenar o array em ordem crescente.

document.getElementById("numerosGerados").textContent = `Números gerados (ordem crescente): ${numeros.join(", ")}`; 
// Exibe os números gerados no elemento HTML com o ID "numerosGerados".
}

// Adiciona um evento de clique no botão
document.getElementById("gerarNumeros").addEventListener("click", gerarNumerosAleatorios); 
// Configura um evnto de clique para chamar a função "gerarNumerosAleatorios" quando o botão com o ID "gerarNumeros" for clicado.   