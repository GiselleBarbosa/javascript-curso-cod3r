Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const aprovados = ["Giselle", "Tiago", "Yago", "Marcos Felipe"];

aprovados.forEach2(function (pessoa, indice) {
  console.log(`${indice + 1}) ${pessoa}`);
});
