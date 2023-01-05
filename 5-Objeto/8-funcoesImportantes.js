const pessoa = {
    nome: 'Rebecca',
    idade: 62,
    peso: 50
}

console.log(pessoa); // OBJETO COMPLETO


console.log(Object.keys(pessoa)); // key pegará apenas as CHAVES do objeto
console.log(Object.values(pessoa)); // value pegará somente os VALORES
console.log(Object.entries(pessoa)); //  entries  pegará um array e subarrays com chaves e valores


Object.entries(pessoa).forEach(([chave, valor]) => { // desestruturando para obter os valores
    console.log(`${[chave]} : ${[valor]}`);
})

Object.defineProperty(pessoa, 'dataNascimento', { // defineProperty define as propriedades do objeto
    enumerable: true,
    writable: false,
    value: '01/01/1960'
})
pessoa.dataNascimento = '01/01/2022'
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa))

//Object.assing (ECMAscript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // concatena varios objetos em um so  

Object.freeze(obj)
obj.c = 1234
console.log(obj);