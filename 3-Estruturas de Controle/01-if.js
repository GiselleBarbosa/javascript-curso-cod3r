function boaNoticia(nota) {
    if (nota >= 7) {
        console.log("Aprovada com nota (" + nota + ") !!!");
    }
}
boaNoticia(7.1);
boaNoticia(6.9);

function avisarCasoVerdade(valor) {
    if (valor) {
        console.log("É verdade ...." + " " + valor);
    }
}
avisarCasoVerdade();
avisarCasoVerdade(null);
avisarCasoVerdade(undefined);
avisarCasoVerdade(NaN);
avisarCasoVerdade("");
avisarCasoVerdade(0); // zero(0) é o unico numero que dara resultado de FALSO
avisarCasoVerdade(-1);
avisarCasoVerdade(" ");
avisarCasoVerdade("?");
avisarCasoVerdade([]);
avisarCasoVerdade([1, 2]);
avisarCasoVerdade({});