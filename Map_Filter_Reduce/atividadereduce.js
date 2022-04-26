function somaNumeros(arr){
    return arr.reduce(function(prev, current){
       console.log((prev));
       console.log((current));
        return prev + current;

    })

}
const arr = [1, 2];

console.log(somaNumeros(arr));

// Exercicio 2

const lista = [
    {
        name :'saboa em po',
        preco: 300,
    },
    {
        name: 'cereal',
        preco: 30,

    },
    {
        name:'toalha',
        preco:40,

    },

];
const saldoDisponivel =100;

function calaculasaldo(saldodispinovel, lista){
    return lista.reduce(function(prev, current){
        return prev -current.preco;

    }, saldoDisponivel);

}