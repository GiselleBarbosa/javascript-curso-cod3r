class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome;
  }
}
class Pai extends Avo {
  // extends serve para estabelecer a relação de prototipos / heranca
  constructor(sobrenome, profissao = "Desenvolvedor front-end") {
    super(sobrenome);
    this.profissao = profissao;
  }
}

class Filho extends Pai {
  constructor() {
    super("Silva");
  }
}

const filho = new Filho();
console.log(filho);
