const pessoa = {
  saudacao: "Bom dia",
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar();
const falar = pessoa.falar;
falar(); //conflito entre paradigmas: funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();



/*bind éo responsavel em amarrar um determinado objeto
 para que ele seja o dono da execução sempre que 
 for chamado*/

 