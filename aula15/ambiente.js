var numero = [7, 6, 5, 4, 3]
numero.sort()
var posicao = numero.indexOf(3)
//numero[5] = 2
//numero.push(1)
//console.log(`Nosso vetor é o ${numero}`)
//console.log(numero)
console.log(`O vetor tem ${numero.length} posições`)
//console.log(`O primeiro elemento é o ${numero[0]}`)
//console.log(numero.sort())

for(var i = 0; i <  numero.length; i++){
    console.log(`${numero[i]}`)
}
if(posicao == -1){
    console.log(`O valor não foi encontrado!`)
}
else{
    console.log(`O valor 7 está na posição : ${posicao}`)
}
