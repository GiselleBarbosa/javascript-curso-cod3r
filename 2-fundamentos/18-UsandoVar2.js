var numero = 1; {
    var numero = 2;
    console.log("dentro do bloco =", numero); // var é de escopo global // exceto as functions, ele nao fica restrito ao escopo global
}

console.log("fora =", numero);