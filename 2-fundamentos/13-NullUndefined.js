let valor; // Undefined = nao inicializada
console.log(valor);

valor = null; // Null = ausência de valor
console.log(valor);
/*console.log(valor.toString());   */ // Erro ao tentar acessar algo que esta nulo

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; // evite atribuir undefined. usar somente para zerar uma variavel ;//
// deixar que o sistema atribua este valor
console.log(!!produto.preco);
/*delete produto.preco */ // usas-se o delete para tirar um atributo
console.log(produto);

produto.preco = null; // sem preço   // entre as 2 opçoes, optar pelo null se necessario // usar o  null apenas para zerar
console.log(!!produto.preco);
console.log(produto);
// nao tentar acessar nada que esteja nulo ou undefined exemplo preco.toString //preco ja esta null
