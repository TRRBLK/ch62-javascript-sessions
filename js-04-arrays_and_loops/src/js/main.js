/*
Array es una estructura de datos que nos permite almacenar multiples valores
en una sola variable 

Un escritorio con cajones con indices para identificar que contienen
 */

const firstArray = [true, 42, "hola", null, {nombre: "Juan"}, [1, 2, 3]];

/*
Definicion.

Arrays []
Usamos const, el contenido es el que cambia pero no la referencia en 
memoria.

Se recomienda usar nombres en plural ya que da a entender que la variable 
va a almacenar varios elementos
*/

const frutas = []; //array vacia
const fruits = new Array(); //array vacia usando el constructor

const numbers = [5 ]; //array con un elemento
const anotherNumbers = new Array(5); //array con 5 posiciones vacias

//En JavaScript los arrays no tienen limite de tamaño y pueden almacenar cualquier tipo de dato

/*
Acceso a los elementos de los arrays
empiezan con el indice 0, el ultimo elemento se define como length - 1
*/

const techStack = ["HTML", "CSS", "JavaScript"];

console.log(`Accediendo al primer elemento: ${techStack[0]}`); //HTML

console.log(`Accediendo al segundo elemento: ${techStack[1]}`); //CSS

console.log(`Accediendo al tercer elemento: ${techStack[techStack.length-1]}`);

//Modificar elementos del array
techStack[1] = "Sass";
console.log(techStack); //["HTML", "Sass", "JavaScript"] cambiando "CSS" por "Sass"

//Agregar elementos al array
techStack[3] = "TypeScript";

//Metodos para agregar elementos al array
techStack.push("React"); //agrega al final
techStack.unshift("Git"); //agrega al inicio

//ejemplo con push y unshift
console.log(techStack); //["Git", "HTML", "Sass", "JavaScript", "TypeScript", "React"]

//Eliminar elementos del array
techStack.pop(); //elimina el ultimo elemento
techStack.shift(); //elimina el primer elemento

//cada metodo devuelve el elemento eliminado
const lastTech = techStack.pop();
console.log(`Elemento eliminado: ${lastTech}`); //React

//con shift
const firstTech = techStack.shift();
console.log(`Elemento eliminado: ${firstTech}`); //Git

//metodo splice
const colors = ["Rojo", "Verde", "Azul", "Amarillo", "Morado", "Naranja"];
console.log("colores iniciales: ", colors.join(" - "));

//agregar 2 elementos en la posicion 2, sin eliminar ninguno
colors.splice(2, 0, "Rosa", "Celeste");
console.log("despues de agregar 2 elementos en la posicion 2: ", colors);

//en cualquier instancia, va a aparecer el cambio porque array es un objeto y se trabaja con referencia
//hay que agregar toString para que muestre el valor
//eliminar 3 elementos desde la posicion 4
colors.splice(4, 3);
console.log("despues de eliminar 3 elementos desde la posicion 4: ", colors.toString()); //["Rojo", "Verde", "Rosa", "Celeste"]

//tambien podemos usar join para mostrar el array como string
console.log("Colores separados por guion: ", colors.join(" - ")); //Rojo - Verde - Rosa - Celeste

//Muy util si lo queremos mostrar en el DOM

// TODO EJERCICIO RÁPIDO:
// 1. Crea un array 'guestList' con 2 nombres.
// 2. Agrega un invitado al final.
// 3. Agrega un invitado al principio
// 4. Elimina al segundo invitado (índice 1) y agrega a otro en su lugar.
// 4. Muestra la lista final.

const guestList = ["Ana", "Luis"];

/*
guestList.push("Francisco");
guestList.unshift("Martha");

guestList.splice(1, 1, "Salma");

console.log("lista final de invitados: ", guestList.join(", "));
*/

const addGuestLastInList = (guestName) =>{ 
    guestList.push(guestName);
}

const addGuestFirstInList = (guestName) => {
    guestList.unshift(guestName);

}
const replaceGuestAtUserIndex = (index, guestName) => {
    const userIndex = index - 1; //ajustar el indice para que el usuario no tenga que pensar en 0
    guestList.splice(userIndex, 1, guestName);
} //un usuario sin conocimientos de array tambien puede remplazar el que quiera

const getGuestListByComma = () => {
   return guestList.join(", ");
}

addGuestFirstInList("Francisco"); //guestList = ["Francisco", "Ana", "Luis"]
addGuestLastInList("Martha"); //guestList = ["Francisco", "Ana", "Luis", "Martha"]
replaceGuestAtUserIndex(2, "Salma"); //guestList = ["Francisco", "Salma", "Luis", "Martha"]
console.log("lista final de invitados: ", getGuestListByComma()); //lista final de invitados: Francisco, Salma, Luis, Martha

/*
PILAS Y COLAS
Organización de datos 

LIFO - Last In First Out (PILA)
Concepto: El ultimo en entrar es el primero en salir.

FIFO - First In First Out (COLA)
Concepto: El primero en entrar es el primero en salir.

*/

1. //LIFO (Last-In, First-Out) - Pila (Stack)
const bookStack = [];
bookStack.push("Don Quijote");
bookStack.push("Cien Años de Soledad");
bookStack.push("1984");
console.log("Pila de libros:", bookStack); // ["Don Quijote", "Cien Años de Soledad", "1984"]
// El lector termina el último libro (pop)
const finishedBook = bookStack.pop();
console.log(`Libro terminado: ${finishedBook}`); // 1984 (El último que llegó)

/*   2. FIFO (First-In, First-Out) - Cola (Queue)
   Concepto: El primer elemento en entrar es el primero en salir.
*/
const printQueue = [];
printQueue.push("thesis.pdf");
printQueue.push("meme.png");
printQueue.push("invoice.docx");
console.log("Cola de impresión:", printQueue); // ["thesis.pdf", "meme.png", "invoice.docx"]
// La impresora termina el primer trabajo (shift)
const printingNow = printQueue.shift();
console.log(`Imprimiendo: ${printingNow}`); // thesis.pdf (El primero que llegó)

/* ================================================================
 Ejercicio:
   Crea un array llamado 'taskList' para gestionar tareas.
   1. Agrega 3 tareas usando 'push'.
   2. Muestra la lista completa de tareas.
   3. Las tareas normales se atienden en orden de llegada (FIFO)
    3.1 Quitar la primera tarea de la lista y muéstrala.
   4. Nos dan un tarea URGENTE que debe ser atendido inmediatamente.
    Por lo que debes poner al inicio de la lista.
   5. Muestra la lista actualizada.
   6. Atiende (elimina) la primera tarea de la lista y muéstrala.
*/

const taskList = [];

// 1. Agregar 3 tareas
taskList.push("Lavar los platos");
taskList.push("Tender la cama");
taskList.push("Comer");

// 2
console.log("Lista de tareas: ", taskList.join(", "));

// 3.1 
let workedTask = taskList.shift();
console.log(`Atendiendo tarea: ${workedTask}`); 

console.log(`Lista actual: ${taskList.join(", ")}`)
// 4
taskList.unshift("Pagar colegiatura");

// 5
console.log(`Lista de tareas actualizada: ${taskList.join(", ")}`); 

//6
workedTask = taskList.shift();
console.log(`Atendiendo tarea urgente: ${workedTask}`); 

/*
==========================
LOOPS (BUCLES)
==========================

Los loops nos permiten ejecutar un bloque de codigo varias veces mientras una condicion sea verdadera

1. FOR
Concepto: Repetir un bloque de codigo un numero determinado de veces
Sintaxis:
for (inicializacion; condicion; actualizacion){
    //codigo a ejecutar
}

*/
let i;
for (i = 1; i <= 19; i++){

    if (i === 6) {
        console.log("Alcanzamos el numero 6, saliendo del loop.");
        break; // Sale del bucle cuando i es 6
    }
    console.log(`Iteracion numero: ${i}`);
}

/*
for( ; ; ) es un loop infinito y se debe evitar o controlar con un break o una condicion interna

ejemplo:
let count = 1;
for( ; ; ){
    console.log(`Iteracion numero: ${count}`);
    count++;
    if (count > 5){
        break; // Sale del bucle cuando count es mayor a 5
    }
}

*/
let k;
for (k = 0; k < 10; k++);
{
    console.log(`Valor de k: ${k}`); //10
}

console.log(`Valor final de i despues del loop: ${k}`); //10, la variable k sigue existiendo despues del loop
/*
2. WHILE
Concepto: Repetir un bloque de codigo mientras una condicion sea verdadera
Sintaxis:
while (condicion){
    //codigo a ejecutar
}

3. DO WHILE
Concepto: Repetir un bloque de codigo al menos una vez y luego mientras una condicion sea verdadera
Sintaxis:
do {
    //codigo a ejecutar
} while (condicion);

4. FOR...OF
Concepto: Iterar sobre los elementos de una coleccion (array, string, etc) 
Sintaxis:
for (const elemento of coleccion){
    //codigo a ejecutar
}

5. FOR...IN
Concepto: Iterar sobre las propiedades enumerables de un objeto
Sintaxis:
for (const propiedad in objeto){
    //codigo a ejecutar
}

6. BREAK y CONTINUE
Concepto: Controlar el flujo de los loops
- BREAK: salir completamente del loop
- CONTINUE: saltar a la siguiente iteracion del loop

7. ETIQUETAS (LABELS)
Concepto: Nombrar un bloque de codigo para controlar el flujo con break o continue
Sintaxis:
etiqueta: {
    //codigo a ejecutar
}
*/

//mientras break termina el loop, continue salta a la siguiente iteracion

let n = 0
for ( n; n <= 10; n++) {
    if (n === 4){
        console.log("Saltando el numero 4");
        continue; // Salta la iteracion cuando n es 4
    }
    console.log(`Numero: ${n}`); // Muestra todos los numeros excepto el 4
}

console.log("numero final despues del loop: ", n); //11, la variable n sigue existiendo despues del loop

//ejercicios de while
while (confirm("Quieres tu numero de la suerte?")) {
    const luckyNumber =Math.random();
    alert(`Tu numero de la suerte es: ${luckyNumber}`);
}

alert("Gracias por participar, hasta luego!");

let whileNumber = 1;

while (whileNumber <= 5) {
    console.log(`Numero en while: ${whileNumber}`);
    whileNumber++;
}


//otro ejercicio de for

const countries = ["Mexico", "USA", "Canada", "Japon"];
for (let index = 0; index < countries.length; index++) {
    const element = countries[index];
    console.log(`Pais en indice ${index+1}: ${element}`);    
}


//FOR...OF se aconseja para arrays y strings (desde ES6)
for (const country of countries) {
    console.log(`Pais: ${country}`);
}

//Si se necesita el indice, usar for tradicional o forEach

//reto final (simulador de cajero automatico)
/*
tienes un array de movimientos: [100, -50, 200, -100]
// 1. Usa un ciclo FOR, o WHILE o FOR-OF para recorrer los movimientos.
// 2. Suma los valores a una variable 'totalBalance'.
// 3. Imprime el balance final.
const transactions = [100.00, -50.00, 200.00, -100.00, 500.00];
let totalBalance = 0;
*/

let atmLog = [100, -50, 200, -100, 500];
let totalBalance = 0;

    for (let index = 0; index < atmLog.length; index++) {
    
    totalBalance = totalBalance + atmLog[index];
    console.log(`processing your balance num. ${index + 1}, adding ${atmLog[index]}, 
                    giving a subtotal of: ${totalBalance}`);
}

console.log(`your final balance is: ${totalBalance}`);

/*const balanceCalculation = (a) => {
    totalBalance = totalBalance + atmLog[index];
}
*/

//FOR EACH
//se puede simplificar el reto anterior usando forEach

totalBalance = 0; //resetear el balance

atmLog.forEach( (atmLog, index) => {
    totalBalance += atmLog;
    console.log(`processing your balance num. ${index + 1}, adding ${atmLog},
                    giving a subtotal of: ${totalBalance}`);
});
console.log(`your final balance is: ${totalBalance}`);

