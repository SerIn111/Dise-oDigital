//Ejercicio 3
// Encontrar duplicados
// Implementa la función 'encontrarDuplicados' que reciba un arreglo de números y
// devuelva un nuevo arreglo
// con los números que se repiten en el arreglo original.

function encontrarDuplicados(array)
{
    let num=[...array]
    num.sort()

    let duplicados=[]

    for(let i=0; i<(num.length-1); i++)
    {
        if (num[i]===num[i+1] && duplicados.indexOf(num[i])===-1)
        {
            duplicados.push(num[i]) 
            // if(duplicados.indexOf(i)==-1)
            // {
            // }
        }
    }

    console.log(array)
    console.log(num)
    console.log(duplicados)
}

