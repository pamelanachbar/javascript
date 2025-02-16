//Criaçao da promessa

var minhaPromessa = (resolve, reject) = new Promise(() => {
    var nome = 'Pamela'
    if(nome === 'Pamela'){
        resolve(`Usuário Pamela encontrado`)
    }
    else{
 reject(`O usuário não foi encontrado`)
    }
})

myPromise.then((data) =>{
    console.log(data)
})

// Encademento de then

var minhaPromessa2 = (resolve, reject) = new Promise(() => {
    var nome = 'Pamela'
    if(nome === 'Pamela'){
        resolve(`Usuário Pamela encontrado`)
    }
    else{
 reject(`O usuário não foi encontrado`)
    }
})

minhaPromessa2.then((data) =>{
    return data.toLoweCase()
}).then((stringModificada)=> {
    console.log(stringModificada)
})

// Métodos catch
var minhaPromessa3 = (resolve, reject) = new Promise(() => {
    var nome = 'Pamela'
    if(nome === 'Pamela'){
        resolve(`Usuário Pamela encontrado`)
    }
    else{
 reject(`O usuário não foi encontrado`)
    }
})

myPromise3.then((data) =>{
    console.log(data)
})
myPromise3.then((data) =>{
    console.log(data)
}).catch((err) => {
    console.log(`Aconteceu`)
})

//resolver várias promessas 

var p1 = new Promise((resolve, reject){
   console.log(`P1 ok`) 
})
var p2 = new Promise((resolve, reject){
    console.log(`P1 ok`) 
 })
 var p3 = new Promise((resolve, reject){
    console.log(`P1 ok`) 
 })