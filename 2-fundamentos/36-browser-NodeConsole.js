let a = 3; // variavel local

global.b = 123;

this.c = 456;
this.d = false;
this.e = "teste";

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

//criando uma variavel maluca // sem var e let === desta forma esta se colocando uma varivel global no node
abc = 3; // nao utilizar este modelo
//evitar variaveis de escopo global
console.log(global.abc);

// module.exports = { e: 456, f: false, g: 'teste'}