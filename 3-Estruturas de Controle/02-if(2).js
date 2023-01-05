function teste1(num) {
    if (num > 7) console.log(num);
    console.log("Final");
}
teste1(6);
teste1(8);

function teste2(num) {
    if (num > 7); {
        console.log(num); // cuidado com o uso do " ; " nas estruturas de controle
    }
}

teste2(6);
teste2(8);

/* function teste2(num) {                       // Modo correto, sem usar "  ;  "  para finalizar bloco sem tratar
    if (num > 7){
        console.log(num);
    }
}

teste2(6);
teste2(8); */