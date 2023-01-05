const peso1 = 1.0;
const peso2 = Number("2.0");
console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // isInteger verifica se é um numero inteiro
console.log(Number.isInteger(peso2));

const ava1 = 9.871
const ava2 = 6.871
const total = ava1 * peso1 + ava2 * peso2
const media = total / (peso1 + peso2)

// funções usando Number
console.log(media.toFixed(2)); // toFixed para controlar a qtde de casas decimais
console.log(media.toString(2)); // dentro do toString usando por exemplo (2) converte em Binario
console.log(typeof media);