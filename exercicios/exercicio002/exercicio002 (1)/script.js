var objetos = [{
    nome : 'Pamela',
    idade : 16,
    trabalhando : true,
    detalhes_profissao : {
        profissao: 'Programador',
        empresa : 'emflex'

    },
    hobbies : [1, "nadar", true]
},
{
    nome : 'Pamela',
    idade : 16,
    trabalhando : false,
    detalhes_profissao : {
        profissao: null,
        empresa : "emflex"

    },
    hobbies : [1, "nadar", true]
}

]

console.log(objetos)

//Converter objetos para JSON. 
/* o Método stringify é usado para converter objetos e arrays de objetos em texto e assegurar que seja em JSON VÁLIDO
*/
var jsonData = JSON.stringify(objetos)
console.log(typeof jsonData)
