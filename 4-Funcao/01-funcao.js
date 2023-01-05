//  função em JS é First-Class Object(Citizens)
//  Higher-order Function
//  função é tratado como um dado em JS
//  criar funcao de forma literal
function fun1() {}

//      é possivel armazenar funcao em uma variavel
const fun2 = function() {};

//      armazenando funcao dentro de um array
const array = [
    function(a, b) {
        return a + b;
    },
    fun1,
    fun2,
];
console.log(array[0](2, 3));

//armazenando em um atributo de objeto
const obj = {};
obj.falar = function() {
    return "opa";
};
console.log(obj.falar());

//Passar funcao como parametro
function run(fun) {
    fun();
}
run(function() {
    console.log("Executando ...");
});

//Uma funçao pode retornar / conter outra função

function soma(a, b) {
    return function(c) {
        console.log(a + b + c);
    };
}

soma(2, 3)(4);
const cincoMais = soma(2, 3);
cincoMais(4);