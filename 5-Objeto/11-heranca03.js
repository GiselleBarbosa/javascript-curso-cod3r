const pai = { nome: 'Pedro', corCabelo: 'Castanhos' }
const filha1 = Object.create(pai)
filha1.nome = 'Ana'

console.log(filha1.corCabelo);


const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome);
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelos ${filha2.corCabelo}`)

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for (let key in filha2) { // identificando quais atributos vieram do proprio objeto e o que veio por herança
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Atribuido por herança : ${key}`);
}