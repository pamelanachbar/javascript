var valores = [1, 2, 3, 45, 6,]
valores.sort()

/*for(var i = 0; i < valores.length; i++){
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}

Forma mais simplificada 
Para  cada posição dentro de vetor valores, mostra se o valor de cada elemento*/
for(var i in valores){
    console.log(valores[i])

}

//buscar valores e retorna a posição, se não achar retorna o -1 

console.log(valores.indexOf(45))
