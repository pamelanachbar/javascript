/*Exercício 87: Dado dois arrays, um com vários números pares e outro com números ímpares, combine-os e, em seguida, filtre apenas os números que são múltiplos de 5. Descrição: Você deve criar uma função que aceite dois arrays como argumento e retorne um novo array resultante da combinação dos dois, mas filtrado para conter apenas*/


var numeroImpares = [1, 3, 5, 7, 9, 11, 15]
var numerosPares = [0, 2, 4, 6, 8, 10]
var numeros = numerosPares.concat(numeroImpares)
var multiplos5 = (vetor) => vetor.filter((item) => item % 5 == 0)
console.log(multiplos5(numeros))

/*Exercício 88: Dado um array de preços de produtos, calcule o preço total após adicionar 10% de imposto a cada produto usando map(), e depois somando tudo com reduce().*/

var precos = [10.0, 11.50, 60.70, 50.13]
var taxa = (vetor) => vetor.map((item) => item * 0.10 + item)
var somar = (v) => v.reduce((acumulador, item) => acumulador + item, 0)
console.log(somar(taxa(precos)))


/*Exercício 89: Dada uma string com várias palavras separadas por espaços, transforme-a em um array e depois retorne a palavra mais longa.
*/
var strings = 'Hello World Babayss'
var separadasPalavras = strings.split(' ')
console.log(separadasPalavras)


function maiorPalavra(vetor){
    var tamanho = 0
    var maior = 0
    var maiorString = ''
    var maior = vetor.filter(function(item){
      tamanho = item.length
        if(tamanho > maior){
            maior = tamanho 
            maiorString = item
        }
    })
    return maiorString
}
console.log(maiorPalavra(separadasPalavras))

//Exercício 90: Dado um array que contém vários elementos duplicados, crie uma função que remova todas as duplicatas e retorne um array com elementos únicos.
var elementos = [10, 20, 30, 40, 50, 50, 10]

function removerDuplicatas(vetor){
    var tamanho = vetor.length
    var elementosNaoDuplicados = []
    var contador = 0
    vetor.filter(function(item){
        contador = 0
        for(i = 0; i < tamanho; i++){
            if(item == vetor[i]){
                contador++
            }
        }
        if(contador == 1){
            elementosNaoDuplicados.push(item)
        }

    })
    return elementosNaoDuplicados
}
console.log(removerDuplicatas(elementos))

var palavras = ['oioioioi', 'olá', 'hello', 'opaopa']
function ordernar(vetor){
    var tamanho = 0
    var tamanhoPosicao = []
    var tamanhoPosicaoDescrecente = []
    var d = []
    vetor.map(function(item){
        tamanho = item.length
        tamanhoPosicao.push(tamanho)
    })
    tamanhoPosicaoDescrecente = tamanhoPosicao.sort().reverse()
    console.log(tamanhoPosicaoDescrecente)
    for(i = 0; i < vetor.length; i++){
            if(vetor[i].length == tamanhoPosicaoDescrecente[i]){
                d.push(vetor[i]) 

    }
}
console.log(d)
    
}

ordernar(palavras)



