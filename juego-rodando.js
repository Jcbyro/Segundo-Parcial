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

 //   document.getElementById("imagen_juego_rodando").src =
 //   "img/juego-rodando-auto-colectivo.png"

    document.getElementById("texto_juego_rodando").innerHTML =
    "Llegaste a tu trabajo."

    document.getElementById("boton_op1_juego_rodando").removeEventListener("click", pag_col_legajo_decision_trabajo)    
    document.getElementById("boton_op2_juego_rodando").removeEventListener("click", pag_col_legajo_decision_trabajo)
}