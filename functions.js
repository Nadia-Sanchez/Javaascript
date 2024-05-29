// function - palabra reservada de JS y nos indica que es una funcion
// FUNCIÓN - BLOQUE CÓDIGO
// saluda (nombre de mi función)
function saluda(){
    //RETURN ES EL PEDAZO DE LÓGICA QUE REGRESA LA FUNCIÓN
    console.log("Hola!");
    return "Hola";

}
//LLAMAR O INVOCAR LA FUNCIÓN -> CALL THE FUNCTION, INVOKE THE FUNTION
console.log(saluda());

// PARÁMETROS DE UNA FUNCIÓN
function suma (numero1, numero2){
    return numero1 + numero2;
}
// ARGUMENTOS 
console.log (suma (5,1000000));
console.log (suma (1004,435));
console.log (suma (4332,546));

//FUNCIONES QUE RECIBEN DATOS Y QUE NO RECIBEN DATOS
// addTwo -> Crear una función addTwo que acepta un número y regresa el número +2

function addTwo(number){
    // Guardar mi resultado del número +2 en una variable
    const result = number + 2;
    //Regresar esa variable con el resultado final
    return result;
}

//LLAMAMOS LA FUNCIÓN
//addTwo() -> SI ES CORRECTO
//addTwo -> NO CORRECTA (NO LLAMAMOS LA FUNCIÓN)


console.log(addTwo(7));
console.log(addTwo(2334456));
console.log(addTwo(68.5));





