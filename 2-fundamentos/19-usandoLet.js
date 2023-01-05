let num = 1; {
    let num = 2;
    console.log("dentro = ", num); // let fica visivel apenas o que esta dentro do bloco // escopo global, funcao e bloco
    // desde que nao estejam dentro do mesmo escopo/bloco
    // variaveis definidas com let mesmo que tenham o mesmo nome, podem coexistir desde que em escopos diferentes
    // variaveis definidas com var tem escopo global e de funcao
}

console.log("fora do bloco = ", num);