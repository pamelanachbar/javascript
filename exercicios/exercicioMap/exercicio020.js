//01
var numeros = [1, 2, 3, 4, 5]
var numerosDobrados = (vetor) => vetor.map((item) => item * 2)
console.log(numerosDobrados(numeros)) 




//02
var arrayStrings = ['Ana', 'Bia', 'Carol', 'Daniele', 'Eduardo']
var arrayMaiusculas = (vetor) => vetor.map((item) => item.toUpperCase())
console.log(arrayMaiusculas(arrayStrings))

//03
var n = [1, 2, 3, 4, 5]
var quadrados = (vetor) => vetor.map((item) => item * item)
console.log(quadrados(n))

//04
 var arrayNomes = ['Ana', 'Antônio', 'Ricardo', 'Marcia']
//var prefixo = (vetor) => vetor.map((item) => item.split(''))


function prefixo(vetor){


    var vetorPrefixos = []
    vetor.map(function(item){
        var array = item.split('')
        //console.log(array)
        var tamanho = array.length
        for(i = 0; i < tamanho; i++){
            if(i == tamanho - 1){
                if(array[i] == 'o'){
                    vetorPrefixos.push(`Sr ${array.join('')}`)
                    
                }
                else{
                    vetorPrefixos.push(`Sra ${array.join('')}`)
                    
                }
            }
        }
})

console.log(vetorPrefixos)
}
prefixo(arrayNomes)



//05 - 
var vetor = ['Carlos-20', 'Maria-40', 'José-50']

function criarObjeto(vetor){
    vetor.map(function (item){
        var array = item.split('')
        console.log(array)
        var tamanho = array.length
        for(i = 0; i < tamanho; i++){
            var nome = []
            if(array[i] == '-'){
                var cont = i
            for(k = 0; k < cont; k++){
               nome.push(array[k])
            }
            }
            
            console.log(nome)
        }
    })
}

criarObjeto(vetor)