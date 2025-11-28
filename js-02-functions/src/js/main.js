/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.
sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/



/** 
 * funcion que revise nombre y apellido y retorna nombre completo
 * @param {string} firstName nombre de la persona
 * @param {string} lastName apellido de la persona
 * @returns concatenación con template literals
*/
const printFullName = function (firstName, lastName) {
    
    return `${firstName} ${lastName} CH62 student`;
};

console.log(printFullName("Hernan","Cortes"));
/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una sola instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return
sintaxis:
    const nombreVariable = (parametros) => instrucción;
    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }

Para las empresas, es preferible usar la segunda sintaxis aunque la 
función tenga un solo parametro.
*/

//Convertir la función expresada anterior a función flecha

const printCompleteName = (firstName, lastName) => console.log(`${firstName} ${lastName}, CH62 student`);
printCompleteName ("Jose", "Carlos");

/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca
Se hace dentro del parametro
*/
const makeCoffe = ( type = "Americano" ) => `Preparando un café ${type}`;
console.log( makeCoffe("Latte") ); // Preparando un café Latte
console.log( makeCoffe() );

//Area de un rectangulo usando parametros por defecto para largo y ancho

const areaRectangle = (base, height) => `The area of the rectangle is 
${parseFloat(base)}*${parseFloat(height)} = ${parseFloat(base*height)}`;
console.log(areaRectangle(8,5));

//ejemplo de uso de default en makecoffe (type = "Americano")


/*
  Pase de datos:
    - Por valor: Se crea una copia independiente del dato. 
      Si modificas la copia, el original NO cambia.
    - Por referencia: Se pasa la dirección de memoria (referencia), 
      no el dato en sí. Si modificas algo a través de esa referencia, el original SÍ cambia.
 */

/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */

 // Mal diseño: Cada vez que quieras una operación nueva, modificas esta función.
const calculateBad = (a, b, type) => {
    if (type === "sum") return a + b;
    if (type === "subtract") return a - b;
    // Si quiero dividir, tengo que editar este archivo y agregar otro if...
};
console.log( calculateBad(5, 3, "sum") ); // 8
console.log( calculateBad(5, 3, "subtract") ); // 2

// Aplicando funciones de callback
// 1. La función principal está "Cerrada" (no la tocamos más)
const calculate = (a, b, operationFunction) => {
    return operationFunction(a, b);
};

//console.log(`Usando incorrectamente la función: ${calculate( 5, 3, "sum")}`);

const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;

//crear una fnncion que sume dos numeros

const sum = (a,b) => a + b;

//Aplicar a la función calculate la función suma con a = 3, b = 5.

console.log (`Your sum is ${calculate(3,5,sum)}`);

//Aplicar una funcion que calcule la potencia de un numero a**b

console.log(`Your potency is ${calculate(3,5,(a,b) => a**b)}`);

//Aplicar una función que calcule el residuo de una división, para saber si 6 es divisible entre 3

console.log(`we want to know that 3 is factor of 6, so if 6%3 = ${calculate(6,3,(a,b) => a%b)} (zero) 
then it is ${calculate(6,3, (a,b) => a%b == 0)}, ${calculate(6,3,(a,b) => a%b != 0)} if it's another result`);

