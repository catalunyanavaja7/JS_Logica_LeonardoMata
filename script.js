//********************* Ejercicio 1 *********************

function multiplo(numero) {

    if (numero % 3 === 0 && numero % 7 === 0) {
        console.log("El numero es multiplo de 3 y de 7")
    } else if (numero % 3 === 0) {
        console.log("El numero es multiplo de 3")
    } else if (numero % 7 === 0) {
        console.log("El numero es multiplo de 7")
    }
}

multiplo(21)

//********************* Ejercicio 2 *********************

function rango(x, y) {
    console.log(x > 10 && x < 50 && y > 10 && y < 50 ? "Los dos estan entre 10 y 50" : x > 10 && x < 50 ? "Unicamente es valor " + x + " esta entre 10 y 50" : y > 10 && y < 50 ? "Unicamente el valor " + y + " esta entere 10 y 50" : "Ninguno esta entre 10 y 50")
}

rango(60, 20)

//********************* Ejercicio 3 *********************

function qualificacio(enter) {
    if (enter >= 9) {
        console.log("Exel·lent")
    } else if (enter >= 7) {
        console.log("Notable")
    } else if (enter >= 6) {
        console.log("Bé")
    } else if (enter >= 5) {
        console.log("Suficient")
    } else if (enter >= 0) {
        console.log("Suspès")
    }
}

qualificacio(5, 60)

//********************* Ejercicio 5 *********************

function maximo(resultado) {
    let suma = 0
    let n = 0

    while (suma + (n + 1) <= resultado) {
        n++
        suma += n
    }

    return n
}

console.log(maximo(15))
