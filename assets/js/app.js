function mostrarMenuPrincipal() {
    let opcion = prompt(
        "¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesites.\n" +
        "Escribe el número de la opción que buscas: \n" +
        "1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial \n4.- Otras consultas"
    );

    switch (opcion) {
        case "1":
            boletasPagos();
            break;
        case "2":
            senalLlamadas();
            break;
        case "3":
            ofertaComercial();
            break;
        case "4":
            otros();
            break;
        default:
            defecto();
            break;
    }
}

// Función para solicitar opciones y validar entrada
function solicitarOpcion(mensaje, opcionesValidas) {
    let opcion;
    do {
        opcion = prompt(mensaje).toUpperCase(); // Convertimos la entrada a mayúsculas
    } while (!opcionesValidas.includes(opcion));
    return opcion;
}

// Funciones de cada opción
function boletasPagos() {
    const mensaje = "Seleccione una opción \n1.- Ver Boleta \n2.- Pagar cuenta";
    const opcion = solicitarOpcion(mensaje, ["1", "2"]);

    if (opcion === "1") {
        alert("Haga clic aquí para descargar su boleta.");
    } else if (opcion === "2") {
        alert("Usted está siendo transferido. Espere por favor...");
    }
}

function senalLlamadas() {
    const mensaje = "Seleccione una opción \n1.- Problemas con la señal \n2.- Problemas con las llamadas";
    const opcion = solicitarOpcion(mensaje, ["1", "2"]);

    const problema = prompt("A continuación escriba su solicitud");
    alert("Estimado usuario, su solicitud: '" + problema + "' ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.");
}

function ofertaComercial() {
    const mensaje = "¡Mentel tiene una oferta comercial acorde a tus necesidades! \n" +
        "Para conocer más información y ser asesorado personalmente por un ejecutivo escribe 'SI' y un ejecutivo te llamará. De lo contrario ingrese 'NO'";
    const opcion = solicitarOpcion(mensaje, ["SI", "NO"]);

    if (opcion === "SI") {
        alert("Un ejecutivo contactará con usted.");
    } else {
        alert("Gracias por preferir nuestros servicios.");
    }
}

function otros() {
    const consulta = prompt("A continuación escriba su consulta");
    alert("Estimado usuario, su consulta: '" + consulta + "' ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.");
}

function defecto() {
    alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios.");
}

// Llama al menú principal al cargar la página
mostrarMenuPrincipal();
