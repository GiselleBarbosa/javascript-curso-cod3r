const prod1 = {};
prod1.nome = "Celular Xiaomi";
prod1.preco = 4998.9;
prod1["Desconto Legal"] = 0.4; // evitar atributos com espaço

console.log(prod1);

const prod2 = {
  nome: "camisa Polo",
  preco: 79.9,
};

{
	"nome": "Camisa Polo",
	"preco": 79.90
}

console.log(prod2);
