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

console.log("****** Ej 1 ****** ")
multiplo(21)

//********************* Ejercicio 2 *********************

function rango(x, y) {
    console.log(x > 10 && x < 50 && y > 10 && y < 50 ? "Los dos estan entre 10 y 50" : x > 10 && x < 50 ? "Unicamente es valor " + x + " esta entre 10 y 50" : y > 10 && y < 50 ? "Unicamente el valor " + y + " esta entere 10 y 50" : "Ninguno esta entre 10 y 50")
}

console.log("****** Ej 2 ****** ")
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

console.log("****** Ej 3 ****** ")
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

console.log("****** Ej 5 ****** ")
console.log(maximo(15))

//********************* Ejercicio 6 *********************

function sumarDigitos(x) {
    let suma = 0;

    for (let char of x) {
        if (!isNaN(char) && char !== " ") {
            suma += Number(char);
        }
    }

    return suma;
}

console.log("****** Ej 6 ****** ")
console.log(sumarDigitos("a1b2c3"));

//********************* Ejercicio 7 *********************

function ordenarTres(a, b, c) {
    return [a, b, c].sort((x, y) => y - x);
}

console.log("****** Ej 7 ******")
console.log(ordenarTres(4, 3, 6))

//********************* Ejercicio 8 *********************

function ParellsSenars(x) {
    contadorParells = 0;
    contadorSenars = 0;
    for (let i = 0; i <= x;i++) {
        if (i % 2 === 0) {
            ++contadorParells
        }
        else {
            ++contadorSenars
        }
    }
    console.log("Parells: " + contadorParells)
    console.log("Senars: " + contadorSenars)
}

console.log("****** Ej 8 ******")
ParellsSenars(10)

//********************* Ejercicio 9 *********************

function mostrarPatron() {
    let filas = 5;

    for (let i = 1; i <= filas; i++) {
        let linea = "";

        for (let j = 1; j <= i; j++) {
            linea += "* ";
        }
        console.log(linea);
    }
}
console.log("****** Ej 9 ******")
mostrarPatron();


//********************* Ejercicio 10 *********************

let ii = 1;
let suma3 = 0;  // acumulador para múltiplos de 3
let suma5 = 0;  // acumulador para múltiplos de 5

do {
    if (ii % 3 === 0) {
        suma3 += ii;
    }
    if (ii % 5 === 0) {
        suma5 += ii;
    }
    ii++;
} while (ii <= 1000);

console.log("****** Ej 10 ******")
console.log("Suma de los múltiplos de 3 hasta 1000:", suma3);
console.log("Suma de los múltiplos de 5 hasta 1000:", suma5);

//********************* Ejercicio 11 *********************
