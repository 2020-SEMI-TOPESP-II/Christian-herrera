/*Declarar dos variables con la palabra reservada "var", imprimir el resultado de las operaciones de
 "Suma", "Resta", "Multiplicación" y "División" en la consola. Las variables pueden ser estáticas. */
var n1 = 15;
var n2 = 20;

function sumar(n1, n2) {
    return (parseInt(n1) + parseInt(n2));
};

function restar(n1, n2) {
    return (parseInt(n1) - parseInt(n2));
};

function multiplicar(n1, n2) {
    return (parseInt(n1) * parseInt(n2));
}

function dividir(n1, n2) {
    return (parseInt(n1) / parseInt(n2));
}

console.log(`Las operaciones entre "${n1}" y "${n2}" son:`, 'suma', sumar(n1, n2), 'resta', restar(n1, n2), 'multiplicacion', multiplicar(n1, n2), 'y division', dividir(n1, n2));
console.log('\n');

// Declarar dos variables con la palabra reservada "let", imprimir la concatenación de ellas.

let a = "20";
let b = "20";

console.log("Este es el año", a + b);
console.log('\n');

//Declarar dos variables con la palabra reservada "const", imprimir cuál es el tipo de dato de esa variable.

const t1 = 13;
const t2 = "texto";

console.log(`tipo de dato de ${t1} es `, typeof t1, `y de ${t2} es`, typeof t2);
console.log('\n');

/*Declarar una variable tipo Objecto, colocar 4 llaves dentro de él que contengan un entero, un string,
un booleano y un objeto vacío, en ese mismo orden.*/

const obj = new Object();

obj.edad = 25;
obj.nombre = "christian";
obj.boolean = true;
obj.vacio = null;

console.log(obj.edad, obj.nombre, obj.boolean, obj.vacio);