//TRABALHANDO OBJETOS NO JAVASCRIPT

//criar uma variável do tipo objeto 

let pessoa = {
    nome: 'Deivid',
    idade: 52,
    altura: 1.58,
    cargo: 'estudante'
};

console.log(pessoa);

console.log(pessoa.nome);

console.log(pessoa.altura);

let carro = {
    nome: 'Brasilia',
    cor: 'amarela',
    marca: 'Volkswagen',
};

console.log(carro.nome + ' ' + carro.cor);

//CRIANDO UM ARRAY DE OBJETOS 

let alunos = [
    { nome: 'Helo', CGM: 1681114, turma: '2DS' },
    { nome: 'Bernardo', CGM: 1683335, turma: '2DS' },
    { nome: 'Rogerio', CGM: 1682226, turma: '2DS' }
];

console.log(alunos);

console.log(alunos[1]);

console.log(alunos[0].nome);