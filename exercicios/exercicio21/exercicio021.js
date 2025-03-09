var numeros = [1, 2, 3, 4, 5, 6, 7]

var somar = (vetor) => vetor.reduce((acumulador, item) => acumulador + item, 0)
console.log(somar(numeros))

function media(vetor){
    
    var media = 0
   var soma =  vetor.reduce(function(acumulador, item){
    return acumulador += item
        
    }, 0)
  media = soma / vetor.length
  console.log(media)
    
}
var numeros = [1, 2, 3, 4, 5, 6, 7]
media(numeros)

console.log(numeros.sort())

var numero = 4
var string = 'oiii'
console.log(string.repeat(numero))

setTimeout(() =>{
    console.log('oi')
}, 5000)

//Método concat para strings e arrays
var stringOne = 'Pamela'
var stringTwo = 'Nachbar'
console.log(stringOne.concat(stringTwo))
