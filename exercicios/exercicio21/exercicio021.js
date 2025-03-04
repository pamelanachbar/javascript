var numeros = [1, 2, 3, 4, 5, 6, 7]

var somar = (vetor) => vetor.reduce((acumulador, item) => acumulador + item, 0)
console.log(somar(numeros))

function media(vetor){
    var soma = 0
    vetor.reduce(function(acumulador, item, index, vetor){
     acumulador += item
        if(index == vetor.length - 1){
            var soma = acumulador
            var media = soma / index + 1
        }
        
    }, 0)
   console.log(media)
    
}
media(numeros)