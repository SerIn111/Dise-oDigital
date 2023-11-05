//Ejercicio 1
// Contar la cantidad de palabras en un texto
// Implementa la función 'contarPalabras' que reciba un texto y devuelva la cantidad de
// palabras que contiene.

function contarPalabras(palabra)
{
    let contador=1
    let str=[...palabra]
    for(let i=0; i<str.length; i++)
    {
        if(str[i]==' ' || str[i]=='.' || str[i]==',' || str[i]==';' || str[i]=='¿' || str[i]=='?' || str[i]=='¡' || str[i]=='!')
        {
            contador++
        }
    }

    console.log(contador)
    // console.log(str)
}
