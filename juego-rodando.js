function pag_ini_decision_6am() {
    puntaje = puntaje + 10;
    document.getElementById("puntaje_juego_rodando").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("imagen_juego_rodando").src =
    "img/juego-rodando-mapa.jpg"

    document.getElementById("texto_juego_rodando").innerHTML =
    "Decidiste levantarte a las 6.00 am. ¡Excelente! Siempre es preferible evitar los horarios donde se acumula gran cantidad de personas en las calles o transporte. <br> <br> Te preparas para salir y con tu celular revisas la aplicación del mapa. Desde tu dirección tienes dos colectivos que te llevan a tu trabajo, uno se encuentra cerca pero tiene parada sobre la vereda de una calle angosta y el otro tiene una ubicación más lejana pero cuenta con una parada en el metrobus. ¿A cuál decides ir? "

    document.getElementById("boton_op1_juego_rodando").removeEventListener("click", pag_ini_decision_6am)    
    document.getElementById("boton_op2_juego_rodando").removeEventListener("click", pag_ini_decision_730am)

    document.getElementById("boton_op1_juego_rodando").innerHTML =
    "Colectivo Cercano"
    document.getElementById("boton_op1_juego_rodando").addEventListener("click", pag_mapa_decision_col_cercano)

    document.getElementById("boton_op2_juego_rodando").innerHTML =
    "Colectivo Lejano"
    document.getElementById("boton_op2_juego_rodando").addEventListener("click", pag_mapa_decision_col_lejano)
}

function pag_ini_decision_730am() {
    puntaje = puntaje + 0;
    document.getElementById("puntaje_juego_rodando").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("imagen_juego_rodando").src =
    "img/juego-rodando-mapa.jpg"

    document.getElementById("texto_juego_rodando").innerHTML =
    "Decidiste levantarte a las 7.30 am. Siempre que sea posible es preferible evitar los horarios donde se acumula gran cantidad de personas en las calles o transporte ya que dificulta transitar con una silla de ruedas. <br> <br> Te preparas para salir y con tu celular revisas la aplicación del mapa. Desde tu dirección tienes dos colectivos que te llevan a tu trabajo, uno se encuentra cerca pero tiene parada sobre la vereda de una calle angosta y el otro tiene una ubicación más lejana pero cuenta con una parada en el metrobus. ¿A cuál decides ir? "

    document.getElementById("boton_op1_juego_rodando").removeEventListener("click", pag_ini_decision_6am)    
    document.getElementById("boton_op2_juego_rodando").removeEventListener("click", pag_ini_decision_730am)

    document.getElementById("boton_op1_juego_rodando").innerHTML =
    "Colectivo Cercano"
    document.getElementById("boton_op1_juego_rodando").addEventListener("click", pag_mapa_decision_col_cercano)

    document.getElementById("boton_op2_juego_rodando").innerHTML =
    "Colectivo Lejano"
    document.getElementById("boton_op2_juego_rodando").addEventListener("click", pag_mapa_decision_col_lejano)
}

function pag_mapa_decision_col_cercano() {
    puntaje = puntaje + -5;
    document.getElementById("puntaje_juego_rodando").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("imagen_juego_rodando").src =
    "img/juego-rodando-colectivo.png"

    document.getElementById("texto_juego_rodando").innerHTML =
    "Decidiste ir a la parada del colectivo cercana. Esta decisión tiene el lado bueno de que la distancia a recorrer es menor, pero que no haya una parada de colectivos adaptada puede traer dificultades. <br> <br> Al llegar al lugar, ves que el colectivo que necesitas está detenido subiendo pasajeros, pero el colectivero no estacionó cerca del cordón de la vereda. <br> <br> ¿Qué decides hacer? Pedirle al conductor que estacione más cerca de la vereda o ir a buscar el colectivo más lejano."

    document.getElementById("boton_op1_juego_rodando").removeEventListener("click", pag_mapa_decision_col_cercano)    
    document.getElementById("boton_op2_juego_rodando").removeEventListener("click", pag_mapa_decision_col_lejano)    

    document.getElementById("boton_op1_juego_rodando").innerHTML =
    "Pedir que se acerque"
    document.getElementById("boton_op1_juego_rodando").addEventListener("click", pag_col_cercado_decision_pedir_acercarse)

    document.getElementById("boton_op2_juego_rodando").innerHTML =
    "Ir al Colectivo Lejano"
    document.getElementById("boton_op2_juego_rodando").addEventListener("click", pag_mapa_decision_col_lejano)

}

function pag_mapa_decision_col_lejano() {
    puntaje = puntaje + 10;
    document.getElementById("puntaje_juego_rodando").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("imagen_juego_rodando").src =
    "img/juego-rodando-colectivo-metrobus.png"
    
    document.getElementById("texto_juego_rodando").innerHTML =
    "Decidiste ir a la parada del colectivo lejana. Esta es la mejor opción, si bien requiere desplazarse una mayor distancia, el MetroBus facilita en gran medida el ingreso a los colectivos. <br> <br>Ahora ya te encuentras de camino a tu trabajo. "

    document.getElementById("boton_op1_juego_rodando").removeEventListener("click", pag_mapa_decision_col_cercano)    
    document.getElementById("boton_op1_juego_rodando").removeEventListener("click", pag_mapa_decision_col_lejano)    
    document.getElementById("boton_op2_juego_rodando").removeEventListener("click", pag_mapa_decision_col_lejano)

    document.getElementById("boton_op1_juego_rodando").innerHTML =
    "Ir al trabajo"
    document.getElementById("boton_op1_juego_rodando").addEventListener("click", pag_col_legajo_decision_trabajo)

    document.getElementById("boton_op2_juego_rodando").innerHTML =
    "Ir al trabajo"
    document.getElementById("boton_op2_juego_rodando").addEventListener("click", pag_col_legajo_decision_trabajo)
}

function pag_col_cercado_decision_pedir_acercarse() {
    puntaje = puntaje + 0;
    document.getElementById("puntaje_juego_rodando").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("imagen_juego_rodando").src =
    "img/juego-rodando-auto-colectivo.png"

    document.getElementById("texto_juego_rodando").innerHTML =
    "Decidiste pedirle al conductor que se acerque a la vereda. <br> <br> Esto muchas veces suele funcionar, pero lamentablemente también es muy común que un auto mal estacionado ocupe el espacio de la parada haciendo que sea imposible para el colectivo acercarse. Debido a que no conoces cuando el dueño del auto lo quitara de allí, la única opción que te queda es ir a buscar al colectivo lejano."

    document.getElementById("boton_op1_juego_rodando").removeEventListener("click", pag_col_cercado_decision_pedir_acercarse)    
    document.getElementById("boton_op2_juego_rodando").removeEventListener("click", pag_mapa_decision_col_lejano)

    document.getElementById("boton_op1_juego_rodando").innerHTML =
    "Ir al Colectivo Lejano"
    document.getElementById("boton_op1_juego_rodando").addEventListener("click", pag_mapa_decision_col_lejano)

    document.getElementById("boton_op2_juego_rodando").innerHTML =
    "Ir al Colectivo Lejano"
    document.getElementById("boton_op2_juego_rodando").addEventListener("click", pag_mapa_decision_col_lejano)
}

function pag_col_legajo_decision_trabajo() {
    puntaje = puntaje + 0;
    document.getElementById("puntaje_juego_rodando").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("imagen_juego_rodando").src =
    "img/juego-rodando-auto-rampa.png"

    document.getElementById("texto_juego_rodando").innerHTML =
    "Llegaste a tu trabajo. Tienes que rodar 2 cuadras para llegar. <br> <br>Pero al recorrer una cuadra y llegar a la ezquina, notas que un auto se encuentra estacionado bloqueando la rampa de la vereda. ¿Qué decides hacer? Retroceder la cuadra que habías recorrido para cruzar a la calle de enfrente o intentar bajar por el cordón de la vereda."

    document.getElementById("boton_op1_juego_rodando").removeEventListener("click", pag_col_legajo_decision_trabajo)    
    document.getElementById("boton_op2_juego_rodando").removeEventListener("click", pag_col_legajo_decision_trabajo)

    document.getElementById("boton_op1_juego_rodando").innerHTML =
    "Retroceder una cuadra"
    document.getElementById("boton_op1_juego_rodando").addEventListener("click", pag_trabajo_decision_retoceder)

    document.getElementById("boton_op2_juego_rodando").innerHTML =
    "Bajar por el cordón"
    document.getElementById("boton_op2_juego_rodando").addEventListener("click", pag_trabajo_decision_bajar)
}

function pag_trabajo_decision_retoceder() {
    puntaje = puntaje + 10;
    document.getElementById("puntaje_juego_rodando").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("imagen_juego_rodando").src =
    "img/juego-rodando-trabajo.png"

    document.getElementById("texto_juego_rodando").innerHTML =
    "Decidiste retroceder. Muy buena decisión, no es seguro que una persona en silla de ruedas baje sin asistencia por el cordón de la vereda. <br> <br> Retrocediste y cruzaste la calle, afortunadamente no te encontraste con ningún obstáculo adicional y pudiste llegar a tu trabajo. <br> <br>Ya está terminando la jornada laboral y tus compañeros están hablando de ir todos juntos a cenar por allí cerca a un nuevo restaurante con buenas recomendaciones. ¿Qué decides hacer? Aceptas la invitación o Preguntas sobre el lugar primero."

    document.getElementById("boton_op1_juego_rodando").removeEventListener("click", pag_trabajo_decision_retoceder)    
    document.getElementById("boton_op2_juego_rodando").removeEventListener("click", pag_trabajo_decision_bajar)

    document.getElementById("boton_op1_juego_rodando").innerHTML =
    "Aceptar Invitación"
    document.getElementById("boton_op1_juego_rodando").addEventListener("click", pag_trabajo_aceptar_invitacion)

    document.getElementById("boton_op2_juego_rodando").innerHTML =
    "Preguntar por el lugar"
    document.getElementById("boton_op2_juego_rodando").addEventListener("click", pag_trabajo_preguntar)
}

function pag_trabajo_decision_bajar() {
    puntaje = puntaje - 10;
    document.getElementById("puntaje_juego_rodando").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("imagen_juego_rodando").src =
    "img/juego-rodando-trabajo.png"

    document.getElementById("texto_juego_rodando").innerHTML =
    "Decidiste bajar por el cordón. Te pones de espalda al cordón y lentamente vas retrocediendo, pero por el mal estado de la calle una de tus ruedas cae en un pozo y la silla se inclina hacia la derecha. Afortunadamente una persona que estaba cerca llego a sostenerte y evitar que caigas de la silla.  Luego del susto de aquella situación, cruzaste la calle y lograste llegar a tu trabajo. <br> <br>Ya está terminando la jornada laboral y tus compañeros están hablando de ir todos juntos a cenar por allí cerca a un nuevo restaurante con buenas recomendaciones. ¿Qué decides hacer? Aceptas la invitación o Preguntas sobre el lugar primero."

    document.getElementById("boton_op1_juego_rodando").removeEventListener("click", pag_trabajo_decision_retoceder)    
    document.getElementById("boton_op2_juego_rodando").removeEventListener("click", pag_trabajo_decision_bajar)

    document.getElementById("boton_op1_juego_rodando").innerHTML =
    "Aceptar Invitación"
    document.getElementById("boton_op1_juego_rodando").addEventListener("click", pag_trabajo_aceptar_invitacion)

    document.getElementById("boton_op2_juego_rodando").innerHTML =
    "Preguntar por el lugar"
    document.getElementById("boton_op2_juego_rodando").addEventListener("click", pag_trabajo_preguntar)
}

function pag_trabajo_aceptar_invitacion() {
    puntaje = puntaje - 10;
    document.getElementById("puntaje_juego_rodando").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("imagen_juego_rodando").src =
    "img/juego-rodando-trabajo-invitacion.png"

    document.getElementById("texto_juego_rodando").innerHTML =
    "Decidiste aceptar la invitación y al terminar de trabajar fuiste con tus compañeros hasta el lugar. <br> <br>Lamentablemente tus compañeros de trabajo no tuvieron en cuenta la accesibilidad del lugar y ahora estás frente a una gran cantidad de escalones para entrar. ¿Qué decides hacer? Proponer cambiar de restaurante o irte a tu casa."

    document.getElementById("boton_op1_juego_rodando").removeEventListener("click", pag_trabajo_aceptar_invitacion)    
    document.getElementById("boton_op2_juego_rodando").removeEventListener("click", pag_trabajo_preguntar)

    document.getElementById("boton_op1_juego_rodando").innerHTML =
    "Cambiar de lugar"
    document.getElementById("boton_op1_juego_rodando").addEventListener("click", pag_restaurante_cambiar_lugar)

    document.getElementById("boton_op2_juego_rodando").innerHTML =
    "Ir a casa"
    document.getElementById("boton_op2_juego_rodando").addEventListener("click", pag_restaurante_ir_a_casa)
}

function pag_trabajo_preguntar() {
    puntaje = puntaje + 10;
    document.getElementById("puntaje_juego_rodando").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("imagen_juego_rodando").src =
    "img/juego-rodando-restaurante.png"

    document.getElementById("texto_juego_rodando").innerHTML =
    "Decidiste preguntar por datos del lugar. Excelente, siempre hay que verificar que los lugares a los que quieres ir sean accesibles.  Buscando por google maps descubres que el restaurante tenía una gran escalera para ingresar. Pero encuentran un lugar muy bueno al cual ir cerca de allí. Luego de la cena, ya está todo listo para regresar a casa."

    document.getElementById("boton_op1_juego_rodando").removeEventListener("click", pag_trabajo_aceptar_invitacion)    
    document.getElementById("boton_op2_juego_rodando").removeEventListener("click", pag_trabajo_preguntar)

    document.getElementById("boton_op1_juego_rodando").innerHTML =
    "Ir a casa"
    document.getElementById("boton_op1_juego_rodando").addEventListener("click", pag_restaurante_ir_a_casa)

    document.getElementById("boton_op2_juego_rodando").innerHTML =
    "Ir a casa"
    document.getElementById("boton_op2_juego_rodando").addEventListener("click", pag_restaurante_ir_a_casa)
}

function pag_restaurante_cambiar_lugar() {
    puntaje = puntaje + 5;
    document.getElementById("puntaje_juego_rodando").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("imagen_juego_rodando").src =
    "img/juego-rodando-restaurante.png"

    document.getElementById("texto_juego_rodando").innerHTML =
    "Tu y tus compañeros comienzan a buscar un lugar nuevo y afortunadamente encuentran uno no muy lejos de donde están. <br> <br> Luego de la cena, ya está todo listo para regresar a casa."

    document.getElementById("boton_op1_juego_rodando").removeEventListener("click", pag_restaurante_cambiar_lugar)    
    document.getElementById("boton_op2_juego_rodando").removeEventListener("click", pag_restaurante_ir_a_casa)

    document.getElementById("boton_op1_juego_rodando").innerHTML =
    "Ir a casa"
    document.getElementById("boton_op1_juego_rodando").addEventListener("click", pag_restaurante_ir_a_casa)

    document.getElementById("boton_op2_juego_rodando").innerHTML =
    "Ir a casa"
    document.getElementById("boton_op2_juego_rodando").addEventListener("click", pag_restaurante_ir_a_casa)
}

function pag_restaurante_ir_a_casa() {
    document.getElementById("puntaje_juego_rodando").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("imagen_juego_rodando").src =
    "img/juego-rodando-inicio.jpg"

    if(puntaje == 40) 
        document.getElementById("texto_juego_rodando").innerHTML =
        "<strong>¡PERFECTO!</strong> <br>Obtuviste el puntaje más alto posible. <br>Has tomado las decisiones correctas en las situaciones que se plantearon.  El objetivo de esta actividad es de mostrar las dificultades del día a día de una persona en silla de ruedas que pueden pasar desapercibidas para muchas personas. <br>Esto es solo una mínima porción de la realidad a la que se enfrentan. <br>¿Qué pasaría si no hay otra opción que tomar un colectivo desde la vereda y no es posible para el chofer acercarse al cordón? <br>¿O una calle no tiene rampa en sus equinas o las que tiene están rotas? <br>¿Cómo puede hacer una persona en silla de ruedas en esos casos?. <br><br>Estas con cuestiones que como sociedad deberíamos considerarlas para actuar en consecuencia y asegurar que todo, desde transporte, calles, accesos a lugares sean accesibles para todos."
    else if(puntaje > 20)
        document.getElementById("texto_juego_rodando").innerHTML =
        "<strong>¡Muy Bien!</strong> <br>Obtuviste un buen puntaje. <br>Esperamos que este juego te haya ayudado a apreciar los desafíos que existen, pero quizás se nos pasan por alto. El objetivo de esta actividad es de mostrar las dificultades del día a día de una persona en silla de ruedas que pueden pasar desapercibidas para muchas personas. <br>Esto es solo una mínima porción de la realidad a la que se enfrentan. <br>¿Qué pasaría si no hay otra opción que tomar un colectivo desde la vereda y no es posible para el chofer acercarse al cordón? <br>¿O una calle no tiene rampa en sus equinas o las que tiene están rotas? <br>¿Cómo puede hacer una persona en silla de ruedas en esos casos?. <br><br>Estas con cuestiones que como sociedad deberíamos considerarlas para actuar en consecuencia y asegurar que todo, desde transporte, calles, accesos a lugares sean accesibles para todos."
    else 
        document.getElementById("texto_juego_rodando").innerHTML =
        "Esperamos que este juego te haya ayudado a apreciar los desafíos que existen, pero quizás se nos pasan por alto. El objetivo de esta actividad es de mostrar las dificultades del día a día de una persona en silla de ruedas que pueden pasar desapercibidas para muchas personas. <br>Esto es solo una mínima porción de la realidad a la que se enfrentan. <br>¿Qué pasaría si no hay otra opción que tomar un colectivo desde la vereda y no es posible para el chofer acercarse al cordón? <br>¿O una calle no tiene rampa en sus equinas o las que tiene están rotas? <br>¿Cómo puede hacer una persona en silla de ruedas en esos casos?. <br><br>Estas con cuestiones que como sociedad deberíamos considerarlas para actuar en consecuencia y asegurar que todo, desde transporte, calles, accesos a lugares sean accesibles para todos."
    
    document.getElementById("boton_op1_juego_rodando").innerHTML =
    "Muchas gracias"
    
    document.getElementById("boton_op2_juego_rodando").innerHTML =
    "Muchas gracias"

    document.getElementById("boton_op1_juego_rodando").removeEventListener("click", pag_restaurante_ir_a_casa)    
    document.getElementById("boton_op2_juego_rodando").removeEventListener("click", pag_restaurante_ir_a_casa)
}