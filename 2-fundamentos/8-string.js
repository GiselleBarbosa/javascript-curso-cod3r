// A STRING É UMA CADEIA DE CARACTERS ... DELIMITA-SE UMA STRING COM  ""  , ''  ou   ``,

const escola = "Cod3r";

console.log(escola.charAt(4));
//O charAt mostra o conteudo da posicao indicada

console.log(escola.charAt(5));
// retorna vazio pois nao existe no indice

console.log(escola.charCodeAt(3));
//charCodeAt retorna um caractar da tabela ascii

console.log(escola.indexOf("3"));
//tambem exibi o indice selecionado

console.log(escola.substring(1));
// pula casas - Inicia a contagem apartir do indice 1

console.log(escola.substring(0, 3));
//inicia do indice 0 ate o 2

console.log("Escola ".concat(escola).concat(" !!!"));
// concatena usando concat ou +

console.log(escola.replace(3, " E "));
//substituicoes 

console.log(escola.replace(/\w/g, "E"));
//substituicoes 

console.log("Giselle, Tiago, Yago, Marcos".split(','));
//array