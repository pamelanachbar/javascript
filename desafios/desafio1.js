/*Manipulação de Arrays e Objetos
Escreva uma função que receba um array de objetos, onde cada objeto representa uma pessoa com as propriedades nome, idade, e cidade. A função deve ordenar esse array primeiro pela idade e depois pela cidade (caso as idades sejam iguais). Retorne o array ordenado.*/


function ordenarIdade(arrayObjetos){
    var idades = []
    var menorIdade = 0
    for(i = 0; i < arrayObjetos.length; i++){
        for(k = 0; k < arrayObjetos[i].length; k++){
           if(k == 1){
         console.log('oi')
           }
        }
    }
}


ordenarIdade([{nome: 'Samantha', idade: 18, cidade: 'Limeira'}, {nome: 'Carlos', idade: 16, cidade: 'Piracicaba'}])
