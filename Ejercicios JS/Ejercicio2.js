//Ejercicio2
// Calcular el promedio de notas
// Implementa la función 'calcularPromedioNotas' que reciba un arreglo de objetos que
// representan estudiantes.

function calcularPromedioNotas()
{
    let n;
    let z=[]
    const estudiantes = [
        {
            nombre: "Juan",
            notas: [98, 96, 87, 88]
        },
        {
            nombre: "María",
            notas: [94, 95, 86, 87]
        }
    ];
    // console.log(estudiantes)
    // estudiantes[0].notas.shift()
    // console.log(estudiantes)
    for(let i=0; i<2; i++)
    {
        n=0
        for(let k=0; k<4; k++)
        {
            n+=estudiantes[i].notas[k]
            // estudiantes[i].notas.shift()
        }
        // estudiantes[i].notas.push(n)
        estudiantes[i].notas.splice(0, 4)
        estudiantes[i].notas.push(n/4)
    }
    console.log(estudiantes)
    

    //-----Prueba-----
    // let x=0
    // for(let c=0; c<4; c++)
    // {
    //     x+=estudiantes[0].notas[c]
    // }
    // console.log(x/4)
    
}