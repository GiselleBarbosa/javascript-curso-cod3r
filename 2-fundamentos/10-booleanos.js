let isAtivo = false;
console.log(isAtivo);
isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!isAtivo); // false negação 1x
console.log(!!isAtivo); // true negação 2X - inverte

console.log("--------------------------------- ");
console.log("Os verdadeiros... ");
console.log(" ");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"texto");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("--------------------------------- ");
console.log("Os Falsos... ");
console.log(" ");
console.log(!!0); // zero 0 resulta em falso 
console.log(!!''); //string vazia é falso
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Finalizando");
console.log(!!(''|| null || 0 || ' ' ));

let nome = ""
console.log( nome || 'Desconhecido');
