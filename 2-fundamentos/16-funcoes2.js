// Armazenando uma funcao dentro de uma variavel
const imprimirSoma = function(a,b){
    console.log(a+b);
}
imprimirSoma(2,3)


//Armazenando uma funcao arrow em uma variavel   
//  troca a palavra function pela seta => // redução da sintaxe
const soma = (a,b) => {
    return a+b
}
console.log(soma(2,3));


//retorno implicito com arrow function
const subtracao =(a,b) => a-b

console.log(subtracao(10,2));

const imprimir2 = a => console.log(a);
imprimir2('legal !!!')