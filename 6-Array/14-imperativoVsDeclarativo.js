const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2}]

// IMPERATIVO 
let total1 = 0 
for (let i = 0 ; i <  alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length);
    
// DECLARATIVO = >>> ESTE METODO CRIA VARIOS PROCESSOS QUE PODEM SER REUTILIZADOS DE FORMAS SEPARADAS
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/ alunos.length)

//SELECT CODIGO E NOME FROM CLIENTES WHERE ATIVO = 1