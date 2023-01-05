console.log(typeof String)
console.log(typeof Object);
console.log(typeof Array);

String.prototype.reverse = function() { // REVERTENDO TODOS OS VALORES DE UM ARRAY // 
    return this.split('').reverse().join('')
}

console.log('Giselle Barbosa'.reverse());

Array.prototype.first = function() {
    return this[0] // RETORNANDO A 1ª POSICAO DE UM ARRAY // 
}

console.log([1, 2, 3, 4, 5].first());
console.log(['a', 'b', 'c'].first());

String.prototype.toString = function() {
    return "Testando o Reverse"
}
console.log("Escola Cod3r".reverse());