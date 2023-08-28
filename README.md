*************************************************

*Recuerde ejecutar instalar todas las dependencias necesarias (npm install)*

En la carpeta Test estan las pruebas con jest mas relevantes,
tambien aqui es donde se añadiran mas pruebas con Jest a medida 
que creece el proyecto.

-------------------------------------------------
En la carpeta TryTest hay varios test numerados, estos son pruebas basicas
con las que puede revisar rapidamente el funcionamiento de Jest,
tambien es la carpeta donde me acostumbre al manejo de los comandos npm y al
manejo de test con Jest en general.
-------------------------------------------------
Asegure que las dependencias correctas estan instaladas, y, que el comando jest
esta correctamente en el package.json de la siguiente manera.

"scripts": {
    "test": "jest"
}

Puede ejecutar todos los test usando *npm test*
para ejecutar solo tests preferidos asegurese de colocar el archivo y directorio.
*npm test ./test/DescendingOrder.js*

*************************************************