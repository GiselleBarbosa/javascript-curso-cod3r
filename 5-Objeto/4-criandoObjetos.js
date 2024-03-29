/*                      FORMAS DE SE CRIAR UM OBJETO                      */

// usando a notacao literal   
const obj1 = {}
console.log(obj1)


// Objetct em JS // operador new
console.log(typeof Object, typeof new Object);
const obj2 = new Object
console.log(obj2);

// usando funcoes construtoras 
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)

    }
}
const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 3000, 0.2)

// p1.nome = 'borracha'  // alterdo o atributo nome pois ele com this ficou "publico"
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// funcao factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 800, 5)
const f2 = criarFuncionario('Maria', 1200, 3)
const f3 = criarFuncionario('Giselle', 1900, 0)

console.log(f1.getSalario().toFixed(2), f2.getSalario(), f3.getSalario())

// Object.create 
const filha = Object.create(null)
filha.nome = "Giselle"
console.log(filha);

// Uma funcao famosa que retorna Objeto
const fromJSON = JSON.parse('{"Info": "Sou um JSON"}')
console.log(fromJSON.Info);