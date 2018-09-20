let empleados = [{
        id: 1,
        nombre: 'Agustin'
    }, {
        id: 2,
        nombre: 'Melissa'
    },
    {
        id: 3,
        nombre: 'Juan'
    }
]

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

let getEmpleado = (id) => {


    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => (empleado.id === id))

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${ id }`);
        } else {
            resolve(empleadoDB);
        }
    })

}

getEmpleado(6).then(empleado => {

        return getSalario(empleado)
    })
    .then(salario => {
        console.log(salario);
    })
    .catch(err => {
        console.log(err);
    })


let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id)

        if (!salarioDB) {
            reject(`No se encontro un salario para el usuario ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            })
        }

    })
}