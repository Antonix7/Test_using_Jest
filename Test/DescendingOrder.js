// Funcion para realizar orden descendente

// Definiendo la funcion descendingOrder();
function descendingOrder(n) {
    // Variables...
    let str = n.toString(); // Convertimos el parametro (un numero entero) a una cadena
    let newArr = [];

    // El bucle recorre la variable str
    for (let i = 0; i < str.length; i++) {
        // Convertimos cada elemento de str en indices separados para newArr[i];
        newArr[i] = parseInt(str[i]);
    }
    // Con el metodo sort() ordenamos los elementos de forma descendente
    newArr.sort((a, b) => b - a);
    let result = "";
    for (let i = 0; i < newArr.length; i++) {
        result += newArr[i]; // Aplicamos a result cada elemento (ya ordenados)
    }
    // Retornando el resultado
    return parseInt(result);
}
// Exportando como modulo...
module.exports = descendingOrder;
