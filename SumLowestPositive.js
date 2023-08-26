/*
La funcion sumTwoSmallestNumbers recibe un arreglo y debe sumar los dos 
valores enteros mas bajos.
*/

function sumTwoSmallestNumbers(numbers) {  
    //Code here
    let result = 0;
    numbers.sort((a, b) => a - b);
    for(let i = 0; i < 2; i++){
        result += numbers[i];
    }
    return result;
}

module.exports = sumTwoSmallestNumbers;