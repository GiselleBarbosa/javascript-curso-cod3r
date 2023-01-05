function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        cashback: 2
    }
}
console.log(criarProduto("Smartphone", 2199.49));
console.log(criarProduto("notebook", 1199.49));