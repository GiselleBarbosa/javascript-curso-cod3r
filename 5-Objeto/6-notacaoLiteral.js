const a = 1
const b = 2
const c = 3

const obj1 = { A: a, B: b, C: c }
const obj2 = { a, b, c }
console.log(obj1, obj2)

const nomeAtributo = 'Nota'
const valorAtributo = 7.9

obj3 = {}
obj3[nomeAtributo] = valorAtributo
console.log(obj3);

const obj4 = {
    [nomeAtributo]: valorAtributo
}

console.log(obj4);

const obj5 = {
    funcao1: function() {
        // ... 
    },
    funcao2() {
        // ...
    }
}

console.log(obj5);