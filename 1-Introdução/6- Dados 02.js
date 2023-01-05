let preco = 19.90;
let desconto = 0.4;
let preco_com_desconto = preco * (1 - desconto);



let nome = "Caderno";
let categoria = "Papelaria";
 
console.log("Produto: " + nome)
console.log("Categoria: " + categoria);


console.log("Preço total: R$ "+ preco_com_desconto);
console.log(`Valor desconto: R$ ${(preco / 100) * 40}`);



