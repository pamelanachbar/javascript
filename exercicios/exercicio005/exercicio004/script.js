//sintaxe
function primeiraFuncao(){

return new Promise((resolve) =>{
    setTimeout(() =>{
        console.log('Esperou')
        resolve()
}, 1000)
},
}
 
async function segundaFuncao() {
    console.log("Iniciou")
    await primeiraFuncao()
    console.log('Terminou')
}

segundaFuncao()