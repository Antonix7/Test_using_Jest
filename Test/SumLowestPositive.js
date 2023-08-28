/*
La funcion sumTwoSmallestNumbers recibe un arreglo y debe sumar los dos 
valores enteros mas bajos.
*/

function sumTwoSmallestNumbers(numbers) {  
    // Variables...

    let result = 0; // Inicializamos en cero...

    // Con el metodo sort() ordenamos de forma ascendente.
    numbers.sort((a, b) => a - b);
    for(let i = 0; i < 2; i++){
        result += numbers[i]; // re-asignamos los dos primeros valores, que, seran los menores
    }
    // retornamos el resultado.
    return result;
}

// Exportamos como modulo...
module.exports = sumTwoSmallestNumbers;