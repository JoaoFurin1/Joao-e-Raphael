let pessoa = {
    nome: 'João',
    sobreNome: 'Furini',
    empresa: 'Incepa',
    cargo: 'Programador'
};

console.log(pessoa);
console.log(pessoa.nome);

//desconstruir o objeto
const {nome,cargo,empresa} = pessoa;
console.log(nome);
console.log(empresa);

let nomes = ['Aparício','Bernadete','Cremilda'];
console.log(nomes);

let {0:primeiroNome,1:segundoNome, 2:tereceiroNome}=nomes;
console.log(primeiroNome);

//outro jeito de desconstruir o Array
let[primNome, segNome, tercNome]=nomes;
console.log(segNome);