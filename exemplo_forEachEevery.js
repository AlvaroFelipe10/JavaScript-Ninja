const pessoas = ['alvaro', 'reiventado'];
pessoas.forEach(function(pessoa,index){

})
pessoas.forEach((pessoa,index) => {

})
let retorno = pessoas.every(pessoa => pessoa.includes('a'));
RETORNO É TRUE

let retorno = pessoas.every(pessoa => pessoa.includes('b'));
retorno É FALSE

let retorno = pessoas.every(pessoa => pessoa.includes('d'));
retorno É FALSE

let retorno = pessoas.some(pessoa => pessoa.includes('d'));
RETORNO É TRUE


