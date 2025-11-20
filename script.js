//********************* Ejercicio 1 *********************

function multiplo(numero) {

    if (numero % 3 === 0 && numero % 7 === 0) {
        console.log("El numero es multiplo de 3 y de 7")
    } else if (numero % 3 === 0) {
        console.log("El numero es multiplo de 3")
    } else if(numero % 7 === 0) {
        console.log("El numero es multiplo de 7")
    }
}
multiplo(21)

