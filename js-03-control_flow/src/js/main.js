/*
CONTROL FLOW 
*/

let isActive = true;

if (isActive === true) console.log("El usuario está activo");

if (isActive === true) {
    console.log("El usuario está activo");
}

//bloque de codigo conjunto de sentencias agrupadas entre llaves {. . .}

{
    let firstName = "Juan";
    let lastName = "Perez";
    var alias = "Juanpi";

    

    {
        let firstName = "Sergio";
        let lastName = "Torres";
        var alias = "Serch";

        console.log (firstName, lastName, alias);
    }
    
    var alias = "Juanpi";

    console.log (firstName,lastName,alias);
}

//realizar un arrow function que reciba un numero como valor de temperatura
//si la temperatura es mayor a 30 grados retornar "hace calor"
//caso contrario retornar "hace frio"
//

/*let inputTemperature = () =>  Number(prompt("ingresa la temperatura actual: "));


let currentTemperature = inputTemperature (); 
if (currentTemperature > 29) {
    console.log(`la temperatura es ${currentTemperature}, hace calor`);
}

else {
    console.log(`la temperatura es ${currentTemperature}, hace frio`);
}

*/

//realizar una funcion que reciba el valor booleano si una persona esta feliz o no
//si la persona está feliz, mostrar en la interfaz de usuario la imagen public/images/dino.jpg
//sino que muestre a dino-emo.jpg

/*const checkTemperature = (temperature) => {

    let message = "";

    if (temperature > 30) message = "Hace calor";
        else if (temperature >= 15 && temperature <=30) message = "Temperatura agradable";
        else if (temperature < 15 && temperature >= 0) message = "Hace frio";
        else message = "Hace mucho frio";

    return message;


}

*/
/* 

Realizar una función que reciba un código de temperatura (weatherCode)
de acuerdo al codigo, recibido, retornar un mensaje.

Code	    Description
0	        Clear sky
1, 2, 3	    Mainly clear, partly cloudy, and overcast
45, 48	    Fog and depositing rime fog

///////////////////////////////////////////////////////////
51, 53, 55	Drizzle: Light, moderate, and dense intensity
56, 57	    Freezing Drizzle: Light and dense intensity
61, 63, 65	Rain: Slight, moderate and heavy intensity
66, 67	    Freezing Rain: Light and heavy intensity
71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
77	        Snow grains
80, 81, 82	Rain showers: Slight, moderate, and violent
85, 86	    Snow showers slight and heavy
95 *	    Thunderstorm: Slight or moderate
96, 99 *	Thunderstorm with slight and heavy hail
///////////////////////////////////////////////////////////
*/

/*

OPERADORES AND (&&) Y OR (||)
Los podemos encontrar como operadores de cortocircuito.

Operador lógico AND (&&): 

OP1 && OP2. Si OP1 es verdadero, se retorna la expresión de OP2.

Si OP1 es falso, ya no se regresa nada.

OP1 || OP2. Si OP1 es verdadero, se retorna la expresión de OP1.

Si OP1 es falso, se evalua OP2.

Se consideran falsos:  "", 0, null, undefined, NaN.

*/

console.log ("Activado" && undefined);



/* 

Realizar una función que reciba un código de temperatura (weatherCode)
de acuerdo al codigo, recibido, retornar un mensaje.

Code	    Description
0	        Clear sky
1, 2, 3	    Mainly clear, partly cloudy, and overcast
45, 48	    Fog and depositing rime fog
*/

/*const weatherCode = () => {

    const codeTemperature = Number(prompt("type 0, 1, 2, 3, 45 o 48 to show a message. "));
    let messageOutput = "";

    if (codeTemperature == 0) messageOutput = "Clear sky";
    else if (codeTemperature == 1) messageOutput = "Mainly clear";
    else if (codeTemperature == 2) messageOutput = "partly cloudy";
    else if (codeTemperature == 3) messageOutput = "overcast";
    else if (codeTemperature == 45) messageOutput = "fog";
    else if (codeTemperature == 48) messageOutput = "depositing rime fog";
    else messageOutput = "invalid code";

    console.log(messageOutput);
    return messageOutput;
}

weatherCode ();
*/

const moodImage = document.getElementById ("moodImage");

if (prompt("¿te encuentras feliz? responde si o no") == "no") {
    moodImage.src = "./public/images/dino-emo.png";
}

else {
    moodImage.src = "./public/images/dino.jpg";
}


/*
Switch case

se compara con el valor de cada case y se ejecutan las sentencias 
asociadas a ese case hasta encontrar un break
*/

/**Switch case con el patron "Single Entry, Single Exit"
 * @aparam {*} role
 * @returns
 */

const getAccessLevel = (role) => {

    let accessLevel = "";

    switch (role) {

        case "super admin":
        case "admin":
            accessLevel = "Acceso completo al sistema";
            break;

        case "editor":
            accessLevel = "Acceso para editar contenido";
            break;

        case "viewer":
            accessLevel = "Acceso de solo lectura";
            break;

        default:

            accessLevel = "Acceso denegado";
    }
    
    return accessLevel;
}

/**
 * Switch case con "Early return"
 */

const getAccessLevelWithEarlyReturn = (role) => {

    let accessLevel = "";

    switch (role) {

        case "super admin":
        case "admin":
            return "Acceso completo al sistema";
        case "editor":
            return "Acceso para editar contenido";
        case "viewer":
            return "Acceso de solo lectura";
        default:
            return "Acceso denegado";
    }
    
}

console.log( getAccessLevel("editor"));


const getWeatherSwitch = (code) => {


    switch (code)
   { case 0:
        return "Clear Sky";
    case 1:
        return "Mainly Clear";
    case 2:
        return "Partly cloudy";
    case 3:
        return "Overcast";
    case 45:
        return "Fog";
    case 48:
        return "Depositing rime fog";
    default:
        return "Unknown";
    }

}

console.log (getWeatherSwitch(45));


/*

==========================================


*/

/*
OPERADOR TERNARIO

ALTERNATIVA A IF-ELSE

condicion ? Expresion1SiCondicionVerdadera : Expresion2SiCondicionFalsa

*/

//PAR O IMPAR USANDO TERNARIO

let evenOrOdd = (number) => {

    return number%2 === 0 ? "even" : "odd";
}

console.log(evenOrOdd(0));
console.log(evenOrOdd(1));