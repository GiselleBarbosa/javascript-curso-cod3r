const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log("Aprovado !!!");
    } else {
        console.log("Reprovado... ");
    }
};

imprimirResultado(10);
imprimirResultado(5);
imprimirResultado("Epaa"); // cuidado - linguagem fracamente tipada neste tipo de erro
// o JS nao ira avisar a falha e fara um teste.
// pelo fato da string nao gerar resultado true, ele ira retornar false (else)