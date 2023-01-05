/*const pessoa = {
  nome: "Giselle",
  idade: 32,
  profissao: "Estagiaria",
  empresa: "IBM",
};

console.log(pessoa);
pessoa.admissao = " 15/08/2022";
console.log(pessoa);
*/

const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c;
  },
};

console.log(obj); /* Mostra todo o conteudo do OBJ*/
console.log(JSON.stringify(obj)); /*Em JSON, é um arquivo em formato textual */

// console.log(JSON.parse("{a: 1, b: 2,c3}"));
//console.log(JSON.parse("{'a':1, 'b': 2, 'c': 3}"));
/* Não é um formato valido de JSON devido as Aspas nos atributos que devem ser "aspas duplas"   */

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'));
/* Abrindo o objeto/string maior com aspas simples e os nomes dos atributos com aspas duplas */

console.log(
  JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')
);

/* DICA PARA VALIDAR JSON SE É VALIDO . ACESSE: http://jsonlint.com  */

/*
exemplo JSON valido:

{
	"nome": "Ana",
	"idade": 56,
	"legal": true,
	"filhos": [{
			"nome": "junior",
			"idade": 22
		},
		{
			"legal": false
		}
	]
}
*/
