// função é uma ação, um verbo /// definida por um bloco, sentença de códigos
// é um bloco de codigos nomeados que podem ser "chamados"

//função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 3, 4, 5, 6, 7, 8);
imprimirSoma();

//função com retorno
function soma(a, b = 1) {
  return a + b;
}

console.log(soma(2,3));
console.log(soma(9));
console.log(soma());
