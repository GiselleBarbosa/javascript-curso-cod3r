const prod1 = {};
prod1.nome = "Celular Xiaomi";
prod1.preco = 4998.9;
prod1["Desconto Legal"] = 0.4; // evitar atributos com espaço
console.log(prod1);

const prod2 = {
  nome: "camisa Polo",
  preco: 79.9,
  detalhes_produto: {
    cor: "azul",
    tamanho: "M",
    lojas: {
      matriz: "Lapa",
      filial: "Centro",
    },
  },
};

console.log(prod2);
