let dobro = function (a) {
  return 2 * a;
};
console.log(dobro(2));

dobro = (a) => {
  return a * 2;
};
console.log(dobro(2));

dobro = (a) => {
  return a * 2;
};
console.log(dobro(2));

dobro = (a) => a * 2; // return esta implicito
console.log(dobro(Math.PI));

let ola = function () {
  return "Olá";
};
console.log(ola());

ola = () => "Hello World ...";
console.log(ola());

ola = (_) => "oiii";
console.log(ola());
