const aprovados = ["Giselle", "Tiago", "Yago", "Marcos Felipe"];

aprovados.forEach(function (pessoa, indice) {
  console.log(`${indice + 1}) ${pessoa}`);
});

aprovados.forEach((pessoa) => console.log(pessoa));

const exibirAprovados = (aprovado) => console.log(aprovado);

aprovados.forEach(exibirAprovados);
