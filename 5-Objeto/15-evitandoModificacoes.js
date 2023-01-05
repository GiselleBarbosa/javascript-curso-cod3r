// Object.preventExtensions
/*Temos um objeto que pode pode ser modificado permitindo apenas a exclusão de atributos, e nao a inclusao de novos.*/

const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "promoção",
});

console.log("extensivel:", Object.isExtensible(produto));

produto.nome = "Borracha";
produto.descricao = "Borracha escolar branca";
delete produto.tag;
console.log(produto);

// OBJECT.SEAL
/* NESTE METODO É POSSIVEL APENAS MODIFICAR OS VALORES DOS ATRIBUTOS, 
POREM ELES ESTAO SELADOS E NAO PODEM SER EXCLUIDOS E NEM ADICIONADOS NOVOS */
const pessoa = { nome: "Juliana", idade: "35" };
Object.seal(pessoa);
console.log("Selado: ", Object.isSealed(pessoa));

pessoa.sobrenome = "Silva";
delete pessoa.nome;
pessoa.idade = 12;
console.log(pessoa);

//OBJECT.FREEZE = OBJETO SELADO + VALORES CONSTANTES // IMUTAVEL ... NÃO PERMITE NENHUMA ALTERACAO /*
