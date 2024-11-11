//MAP
//percorre todo o array e executa a ação que tivermos programado

// let lista = ['Altamiro', 'Barnabé', 'Cremilda'];

// lista.map((nome,posicao)=>{
//     console.log(`O nome é ${nome} e ele ocupa a posição ${posicao}`);
// });

//Reduce
//procura reduzir um array normalmente através de operações matemáticas,
//transformando todo o conteúdo do array em um único valor

// let numeros = [2, 3, 5, 10];

// let total = numeros.reduce((acumulador,numero,indice,original)=>{
//     console.log(`${acumulador} - total até agora`);
//     console.log(`${numero} - valor atual`);
//     console.log(`${indice} - posição até agora`);
//     console.log(`${original} - arrray original`);

//     console.log('------------------')
//     return acumulador +=numero;
// });

// console.log(`Total do reduce é ${total}`);

//FIND
//faz uma busca dentro do array e devolve o primeiro item que ele
//encontra e corresponde ao critério de busca

let listagem = [2, 3, 'João', 5,'aluno'];

let busca = listagem.find((item2)=>{
    if (item2==='João'){
        return console.log('Nome encontrado')
        
    }else{
        return console.log('Nome não encontrado')
    };
});

console.log(busca);

//FILTER

let palavras = ['Alface', 'beterraba', 'cenoura', 'dedo']

//vamos retornar palavras que tenham menos de 7 letras
resultado = palavras.filter((palavra)=>{
    return palavra.lenght>=7;
});

console.log(resultado);