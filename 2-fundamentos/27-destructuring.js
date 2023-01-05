// novo recurso criado no ec2015

const pessoa = {
    nome: "Giselle",
    idade: 32,
    endereco:{
        logradouro: "Rua Dez,",
        numero: 59
    }
}

const {nome, idade} = pessoa
console.log(nome, idade);

/* const { logradouro, numero} = pessoa.endereco
console.log(logradouro, numero); */

const{nome: n, idade:i} = pessoa
console.log(n,i);

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada);

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero,cep);
