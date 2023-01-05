//tratamentos de erros em JS //
function tratarErroELancar(erro) {
    // throw new Error("Ocorreu um erro em nosso sistema");
    // throw 10;
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date(),
    };
}

function GritarNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!");
    } catch (e) {
        tratarErroELancar(e);
    } finally {
        console.log("Finalizado");
    }
}

//const obj = { nome: "giselle" };      // Errado (nome)
const obj = { name: "tiago" }; // correto  (name)
GritarNome(obj);