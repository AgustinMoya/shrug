// function sumar (a,b){
//     return a+b;
// }

// let sumar =  (a,b) => a+b;

// function saludar (){
//     return `Hola Mundo!`
// }
//Traducida queda:


// let saludar = (nombre) => `Hola ${ nombre }!`;

// console.log(saludar('Agustin'));

let deadpool ={
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function(){
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

console.log(deadpool.getNombre());