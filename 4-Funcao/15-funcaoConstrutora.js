function carro(velocidadeMaxima = 200, delta = 5) {
  //atributo privado
  let velocidadeAtual = 0;
  //metodo publico
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };
  //metodo publico
  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}
const Uno = new carro();
Uno.acelerar();
console.log(Uno.getVelocidadeAtual());

const Ferrari = new carro(350, 20);
Ferrari.acelerar();
Ferrari.acelerar();
Ferrari.acelerar();
console.log(Ferrari.getVelocidadeAtual());

console.log(typeof carro);
console.log(typeof Ferrari);
