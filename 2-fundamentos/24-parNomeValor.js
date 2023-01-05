//par nome/valor
const saudacao = "Olá"; //contexto léxico 1

function exec() {
  const saudacao = "Olá tudo bem?!"; // contexto léxico 1
  return saudacao;
}

//objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: "Giselle",
  idade: 32,
  peso: 75,
  endereco: {
    logradouro: "Elisio Teixeira Leite",
    numero: 123,
  },
};

console.log(saudacao);
console.log(exec());
console.log(cliente);
