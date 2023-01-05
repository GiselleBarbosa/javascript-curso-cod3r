/* arrays - vetores = serve para agrupar multiplos elementos atraves de um unico 
identificador e os acessa apartir de indices onde a 1ª posição é o 0  */

/* const frutas = ['Maca','Laranja','Banana','Limão','Uva']
console.log(frutas);
console.log(frutas[2]); */

const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);

console.log(valores[4]);
valores[0] = "Inserindo_novoValor"; // trocou o valor do indice 0
console.log(valores);
console.log(valores.length); //quantidade de indices

valores.push({ id: 3 }, false, null, "teste");
console.log(valores);

console.log(valores.pop());
delete valores[0];
console.log(valores);

console.log(typeof valores);
