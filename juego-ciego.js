function dic_530am() {
    puntaje += 5;
    document.getElementById("puntaje-ciego").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("imagen-ciego").src =
    "img/530.png"

    document.getElementById("texto-ciego").innerHTML =
    "Decidistes levantarte temprano para evitar la hora pico, llegas 15 minutos antes de comenzar la clase, y haces las clases del dia. Despues de clase, decides ir a pasear a un parque cercano, queres tomar un colectivo o caminar hasta alla?"

    document.getElementById("opc1-ciego").removeEventListener("click", dic_530am)    
    document.getElementById("opc2-ciego").removeEventListener("click", dic_6am)

    document.getElementById("opc1-ciego").innerHTML =
    "Colectivo"
    document.getElementById("opc1-ciego").addEventListener("click", colectivo_correcto)

    document.getElementById("opc2-ciego").innerHTML =
    "Caminar"
    document.getElementById("opc2-ciego").addEventListener("click", caminar_incorrecto)
}

function dic_6am() {
    puntaje -= 5;
    document.getElementById("puntaje-ciego").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("imagen-ciego").src =
    "img/6.png"

    document.getElementById("texto-ciego").innerHTML =
    "Decidistes dormir un poco mas, pero por eso llegas 15 minutos mas tarde de lo necesario, te disculpas con tu jefe, y haces las clases del dia. Despues de clase, decides ir a pasear a un parque cercano, queres tomar un colectivo o caminar hasta alla?"

    document.getElementById("opc1-ciego").removeEventListener("click", dic_530am)    
    document.getElementById("opc2-ciego").removeEventListener("click", dic_6am)

    document.getElementById("opc1-ciego").innerHTML =
    "Colectivo"
    document.getElementById("opc1-ciego").addEventListener("click", colectivo_correcto)

    document.getElementById("opc2-ciego").innerHTML =
    "Caminar"
    document.getElementById("opc2-ciego").addEventListener("click", caminar_incorrecto)
}

function colectivo_correcto() {
    puntaje += 5;
    document.getElementById("puntaje-ciego").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("imagen-ciego").src =
    "img/Parque-1.png"

    document.getElementById("texto-ciego").innerHTML =
    "Decidiste ir a la parada del colectivo, esta decisión tiene el lado bueno de que no hay necesidad de caminar. Al llegar paseas un poco por el parque y disfrutas del viento. Unos amigos de la escuela te invitan a comer a algun lado<br><br>Podes decidir pedir que alguien te lleve o ir en taxi, que queres hacer?"

    document.getElementById("opc1-ciego").removeEventListener("click", colectivo_correcto)
    document.getElementById("opc2-ciego").removeEventListener("click", caminar_incorrecto)

    document.getElementById("opc1-ciego").innerHTML =
    "Usar un colectivo"
    document.getElementById("opc1-ciego").addEventListener("click", colectivo)

    document.getElementById("opc2-ciego").innerHTML =
    "Pedir un taxi"
    document.getElementById("opc2-ciego").addEventListener("click", taxi)
}

function caminar_incorrecto() {
    puntaje -= 5;
    document.getElementById("puntaje-ciego").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("imagen-ciego").src =
    "img/Parque-2.png"
    
    document.getElementById("texto-ciego").innerHTML =
    "Decidiste caminar, llegas un poco tarde de lo que esperabas asi que no tuvistes mucho tiempo de disfrutar del parque y el viento. Unos amigos de la escuela te invitan a comer a algun lado<br><br>Podes decidir pedir que alguien te lleve o ir en taxi, que queres hacer?"

    document.getElementById("opc1-ciego").removeEventListener("click", colectivo_correcto)
    document.getElementById("opc2-ciego").removeEventListener("click", caminar_incorrecto)

    document.getElementById("opc1-ciego").innerHTML =
    "Usar un colectivo"
    document.getElementById("opc1-ciego").addEventListener("click", colectivo)

    document.getElementById("opc2-ciego").innerHTML =
    "Pedir un taxi"
    document.getElementById("opc2-ciego").addEventListener("click", taxi)
}

function colectivo() {
    document.getElementById("puntaje-ciego").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("imagen-ciego").src =
    "img/Restaurante-1.png"

    document.getElementById("texto-ciego").innerHTML =
    "Decidiste subirte a un colectivo para llegar al restaurante, charlas y a la hora de pedir comida, pedis ayuda a uno de tus compañeros para saber que podes pedir."

    document.getElementById("opc1-ciego").removeEventListener("click", taxi)    
    document.getElementById("opc2-ciego").removeEventListener("click", taxi)

    document.getElementById("opc1-ciego").innerHTML =
    "Pedir ayuda"
    document.getElementById("opc1-ciego").addEventListener("click", ayuda)

    document.getElementById("opc2-ciego").innerHTML =
    "Pedir ayuda"
    document.getElementById("opc2-ciego").addEventListener("click", ayuda)
}

function taxi() {
    document.getElementById("puntaje-ciego").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("imagen-ciego").src =
    "img/Restaurante-2.png"

    document.getElementById("texto-ciego").innerHTML =
    "Decidiste subirte a un taxi para llegar al restaurante, charlas y a la hora de pedir comida, pedis ayuda a uno de tus compañeros para saber que podes pedir."

    document.getElementById("opc1-ciego").removeEventListener("click", taxi)    
    document.getElementById("opc2-ciego").removeEventListener("click", taxi)

    document.getElementById("opc1-ciego").innerHTML =
    "Pedir ayuda"
    document.getElementById("opc1-ciego").addEventListener("click", ayuda)

    document.getElementById("opc2-ciego").innerHTML =
    "Pedir ayuda"
    document.getElementById("opc2-ciego").addEventListener("click", ayuda)
}

function ayuda () {
    document.getElementById("puntaje-ciego").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("imagen-ciego").src =
    "img/Ayuda.png"

    document.getElementById("texto-ciego").innerHTML =
    "Pedis ayuda y comes con tus amigos. Despues de comer le pides a uno de tus amigos que te lleve a casa."

    document.getElementById("opc1-ciego").removeEventListener("click", ayuda)
    document.getElementById("opc2-ciego").removeEventListener("click", ayuda)

    document.getElementById("opc1-ciego").innerHTML =
    "Volver con tu amigo"
    document.getElementById("opc1-ciego").addEventListener("click", volver_casa)

    document.getElementById("opc2-ciego").innerHTML =
    "Volver con tu amigo"
    document.getElementById("opc2-ciego").addEventListener("click", volver_casa)
}

function volver_casa() {
    document.getElementById("puntaje-ciego").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("imagen-ciego").src =
    "img/Volver.png"

    if(puntaje == 10) 
        document.getElementById("texto-ciego").innerHTML =
        "<strong>¡Perfecto!</strong><br>Obtuviste el puntaje más alto posible.<br>Has tomado las decisiones correctas en las situaciones que se plantearon. El objetivo de esta actividad es de mostrar las dificultades del día a día de una persona ciega que pueden pasar desapercibidas para muchas personas.<br>Esto es solo una mínima porción de la realidad a la que se enfrentan.<br>Qué pasaría si no hay otra opción mas que caminar hasta el parque o no es posible pedir un taxi o un amigo?<br><br>Estas con cuestiones que como sociedad deberíamos considerarlas para actuar en consecuencia y asegurar que todo, desde transporte, calles, accesos a lugares sean accesibles para todos.<br><br>Muchas gracias."
    else if(puntaje == 5)
        document.getElementById("texto-ciego").innerHTML =
        "<strong>¡Muy Bien!</strong><br>Obtuviste un buen puntaje.<br>Esperamos que este juego te haya ayudado a apreciar los desafíos que existen, pero quizás se nos pasan por alto. El objetivo de esta actividad es de mostrar las dificultades del día a día ciega de ruedas que pueden pasar desapercibidas para muchas personas.<br>Esto es solo una mínima porción de la realidad a la que se enfrentan.<br>Qué pasaría si no hay otra opción mas que caminar hasta el parque o no es posible pedir un taxi o un amigo?<br><br>Estas con cuestiones que como sociedad deberíamos considerarlas para actuar en consecuencia y asegurar que todo, desde transporte, calles, accesos a lugares sean accesibles para todos.<br><br>Muchas gracias."
    else 
        document.getElementById("texto-ciego").innerHTML =
        "Esperamos que este juego te haya ayudado a apreciar los desafíos que existen, pero quizás se nos pasan por alto. El objetivo de esta actividad es de mostrar las dificultades del día a día ciega de ruedas que pueden pasar desapercibidas para muchas personas.<br>Esto es solo una mínima porción de la realidad a la que se enfrentan.<br>Qué pasaría si no hay otra opción mas que caminar hasta el parque o no es posible pedir un taxi o un amigo?<br><br>Estas con cuestiones que como sociedad deberíamos considerarlas para actuar en consecuencia y asegurar que todo, desde transporte, calles, accesos a lugares sean accesibles para todos.<br><br>Muchas gracias."
    
    document.getElementById("opc1-ciego").innerHTML =
    "Volver a Home"
    document.getElementById("opc1-ciego").addEventListener("click", function() {
        window.location.href = "Index.html";
    });
    
    document.getElementById("opc2-ciego").innerHTML =
    "Volver a Juegos"
    document.getElementById("opc2-ciego").addEventListener("click", function() {
        window.location.href = "Juegos.html";
    });
}