function geraValorAleatorio(max, min) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0; //somente iniciada a variável, sem valor inicial!

do {
    opcao = geraValorAleatorio(-1, 10);
    console.log(`Número Sorteado => ${opcao}.`);
} while (opcao != -1);

console.log("Execução finalizada ... ");