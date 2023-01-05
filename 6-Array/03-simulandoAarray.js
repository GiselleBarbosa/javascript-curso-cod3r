const quaseArray = { 0: "Giselle", 1: "Tiago", 2: "Yago", 3: "Marcos Felipe" };

console.log(quaseArray , typeof quaseArray );


console.log("");

Object.defineProperty(quaseArray, "toString", {
  value: function() {
    return Object.values(this);
  },
  enumerable: false,
});

console.log("Indice [0] "+ quaseArray[0]);

const meuArray = ["Giselle", "Tiago", "Yago", "Marcos Felipe"];

console.log("");

console.log(quaseArray.toString(), meuArray);
