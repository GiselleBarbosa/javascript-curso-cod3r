function compras(trabalhos1, trabalhos2) {
    
  const comprarSorvete = trabalhos1 || trabalhos2;
  const comprarTV50 = trabalhos1 && trabalhos2;
  //const comprarTV32 = !!(trabalhos1 ^ trabalhos2); //modelo bitwise XOR
  const comprarTV32 = trabalhos1 != trabalhos2;
  const manterSaudavel = !comprarSorvete;
  return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel };
}
console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
