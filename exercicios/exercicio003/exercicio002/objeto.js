var amigo = {nome: 'José',
 sexo: 'F', 
 peso: 70.0,
 engordar(p = 0){
    console.log('Engordou')
    this.peso += p
 }
}
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)
engordar(2)