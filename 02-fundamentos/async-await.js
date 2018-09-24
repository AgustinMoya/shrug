/*
    Async and await
*/


// let getNombre = async() => {

//     return 'Agustin'
// }





let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Agustin')
        }, 3000)
    })
}

let saludo = async() => {

    let nombre = await getNombre();

    return `Hola ${nombre}`
}


saludo().then(mensaje => {
    console.log(mensaje);
})

console.log(getNombre());