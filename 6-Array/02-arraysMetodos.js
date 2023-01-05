const numeros = ["1", "2", "3", "4", "5"];
console.log("Array Original [" + numeros + "]");

console.log("");
/*                                                                                              */
numeros.pop();
console.log("POP removeu o ultimo item (5) => " + numeros);

console.log("");
/*                                                                                              */
numeros.push("6");
console.log("Push adicionou o 6 no final => " + numeros);

console.log("");
/*                                                                                              */
numeros.shift();
console.log("Shift removeu o primeiro item (1) =>  " + numeros);

console.log("");
/*                                                                                              */
numeros.unshift("0"); //////////////////////////// Adiciona ao inicio!
console.log("Unshift adiciona no inicio =>  " + numeros);

console.log("");
/*                                                                                              */
numeros.splice(2, 0, "A");
console.log("Splice adicionou no indice [2] um novo item (A) =>  " + numeros);

console.log("");
/*                                                                                              */
numeros.splice(3, 1); ////////////////////////////// Serve também para remover
console.log("Aqui o Splice removeu o indice [3] que era o n 3 => " + numeros);
console.log("");
/*                                                                                              */

const algunsNumeros = numeros.slice(2);
console.log(
  "Aqui o Slice ira gerar um novo Array apartir do indice [2] => " +
    algunsNumeros
);
console.log("Original " + numeros);
console.log("Novo Array " + algunsNumeros);
console.log("");
/*                                                                                              */

const algunsNumeros2 = numeros.slice(1, 4) 
console.log("Original " + numeros);
console.log("Aqui o Slice pegou apartir do indice [1] exibindo até o indice[3] => "+ algunsNumeros2);