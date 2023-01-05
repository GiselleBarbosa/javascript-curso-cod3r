// objeto é uma colecao dinamica de pares chave/valor 

const produto = new Object
produto.nome = 'Smartphone'
produto['marca do produto'] = 'Asus'
produto.preco = 4000

console.log(produto) //pegar o produto completo
console.log(produto.preco) //pegar somente preco       
console.log(produto['marca do produto']) //pegar somente marca 
delete produto['marca do produto'] // deletando atributos    

console.log(produto);