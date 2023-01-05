/* const produto1 = {
    name: 'Produto 1',
    preco: 45
}

const produto2 = {
    name: 'Produto 2',
    preco: 75
} */

//factory simples //
function criarPessoa() {
    return {
        nome: "Giselle",
        sobreNome: "Barbosa"
    }
}
console.log(criarPessoa());