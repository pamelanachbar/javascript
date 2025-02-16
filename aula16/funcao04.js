function fatorial(numero){
    var f = 1
    for(var i = numero; i > 1; i--){
        f *= i
    
    }
    return f
}

console.log(fatorial(5))