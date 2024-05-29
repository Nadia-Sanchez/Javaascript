
// String -- cadena
const nombre = "Miranda";
const edad = "24";
const space = ' ';

// Number - cualquier número
const favNum = 15;
const favNum1 = 15.9;

// Boolean - 2 opciones (true or false)

const iLoveCoding = true;
const iLoveCoding1 = false;

// Undefined
let casa; // no le agrego un valor, así que es undefined
console.log(casa); 

//Null - nulo
const hoja = null;

//*********************************************** */
// CHALLENGES

// 1. String Concatenation
// Voy a crear 3 variables constantes y les voy a asignar unas palabras a cada una
const first = "Welcome";
const second = "to the";
const third = "Jungle";
const space1 = ' ';
// Hacer un console.log concatenando estas variables PERO voy a guardar esa frase en otra variable
// TU CÓDIGO AQUÍ

const welcome = first + space + second + space1 +third;

console.log(welcome);
// OUTPUT: "Welcome to the jungle"

// *****************TIPOS DE DATOS COMPUESTOS**********
// NOS PERMITEN GUARDAR EN VARIABLES COLECCIONES DE DATOS ASOCIADOS O NO

// OBJET

const persona = {
    //NOMBRE --- VALOR // KEY VALUE PAIRS
    // KEY -- VALUE
    //strings

    nombre: "Miranda Jaramillo Morales",
    nacimiento: "15/07/1999",
    colorOjos: "cafés",
    // Number
    edad: 24,
    // Boolean
    solterx: true,
}
console.log(persona);
//¿Cómo accedemos a los valores del objeto?
//Quiero acceder al nombre de la persona
console.log("Mi nombre es " + persona.nombre);
console.log("Mi nacimiento es " + persona.nacimiento);

console.log(persona.edad);

//ARRAY - ARREY
//             index 0,  index 1,    Index 2, Index 3
const frutas = [ "banana", "manzana", "melon", "pera"];
const vacio = [ ];
const fruta = [ "tomate"];
const miArray = [ 21, "ramen", true, undefined, false];
const miArray2 = [ 15, "manzana", [1, 2, 3, true, "banana"], {uno:1}];

// Tipos de datos de mi Array
// se accede al index 0 que le corresponde a banana.
console.log(frutas [3]);
console.log(frutas [1])

const frutal = "sandía";
//   ACCEDO A EL NOMBRE DE LA VARIABLE frutal Y CON [] ESTOY ACCEDIENDO AL ÍNDICE EN ESPECÍFICO

console.log(frutal[0]);
 

// AGREGAR VALORES A MI ARRAY INDIRECTAMENTE
//
vacio.push("holis");

console.log(vacio);





