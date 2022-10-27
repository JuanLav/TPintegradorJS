console.log('Archivo scripts.js encontrado');

/* verificar el contenido de los campos: 
    id="ingresoNombre" - más de 2 caracteres
    id="ingresoApellido" - más de 2 caracteres
    id="ingresoEmail" - comparar con expresión regular para emails
    id="ingresoCantidad" - mayor que 0 (CERO)
    id="ingresoCategoria" - elegir una
*/

const precioEntrada = 200 ; 

const expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 

const nombre = document.getElementById("ingresoNombre");
const apellido = document.getElementById("ingresoApellido");
const email = document.getElementById("ingresoEmail");
const cantidad = document.getElementById("ingresoCantidad");

const categoria = document.getElementById("ingresoCategoria");

const btnResumen = document.getElementById("btnResumen"); 
const btnBorrar = document.getElementById("btnBorrar"); 

const mensajeNombre = document.getElementById("mensajeNombre");
const mensajeApellido = document.getElementById("mensajeApellido");
const mensajeEmail = document.getElementById("mensajeEmail");
const mensajeCantidad = document.getElementById("mensajeCantidad");

const importe = document.getElementById("importeTotal") ;

var cantEntradas, total, error = false , textoImporte = "Total a Pagar: $";

function validarEmail() {
    if (! expRegular.test(email.value) ) {
        mensajeEmail.innerHTML = "Ingrese un mail válido" ;
        error = true ; 
    } else {
        mensajeEmail.innerHTML = "" ;
    }
}

function validarNombre() {
    if ( nombre.value.length < 3 ) {
        mensajeNombre.innerHTML = "Ingrese un nombre válido" ;
        error = true ; 
    } else {
        mensajeNombre.innerHTML = "" ;
    }
}

function validarApellido() {
    if ( apellido.value.length < 3 ) {
        mensajeApellido.innerHTML = "Ingrese un apellido válido" ;
        error = true ; 
    } else {
        mensajeApellido.innerHTML = "" ;
    }
}

function validarCantidad() {
    if ( cantidad.value < 1 ) {
        mensajeCantidad.innerHTML = "La cantidad de tickets debe ser 1 o más" ;
        error = true ; 
    } else if ( cantidad.value % 1 > 0 ) {
        mensajeCantidad.innerHTML = "La cantidad de tickets debe ser un número entero" ;
        error = true ; 
    } else {
        mensajeCantidad.innerHTML = "" ;
    }
}

function borrar() {
    // borro el contenido de las casillas
    nombre.value = "" ;
    apellido.value = "";
    email.value = "";
    cantidad.value = 0;

    // borro el contenido de los mensajes de error
    mensajeEmail.innerHTML = "" ;
    mensajeNombre.innerHTML = "" ;
    mensajeApellido.innerHTML = "" ;
    mensajeCantidad.innerHTML = "" ;
    importe.innerHTML = textoImporte ; 
}

function validarTodo() {
    validarEmail();
    validarNombre();
    validarApellido();
    validarCantidad();

    console.log('todo validado');

    console.log(categoria.value);

    console.log(error);

    if (error == false ) {
        console.log("dentro del if");
        console.log(cantidad.value);
        console.log(precioEntrada);
        switch (true) {
            case ( categoria.value == "General" ): // general descuento = 0%
                importe.innerHTML = textoImporte + " " + cantidad.value * precioEntrada ;
                console.log("caso general");
                break ;
            case ( categoria.value == "Estudiante" ): // Estudiante descuento = 80%
                importe.innerHTML = textoImporte + " " + cantidad.value * precioEntrada * 0.20 ;
                console.log("caso estudiante");
                break ;
            case ( categoria.value == "Trainee" ): // Trainee descuento = 50%
                importe.innerHTML = textoImporte + " " + cantidad.value * precioEntrada * 0.50 ;
                console.log("caso trainee");
                break ;
            case ( categoria.value == "Junior" ): // Junior descuento = 15%
                importe.innerHTML = textoImporte + " " + cantidad.value * precioEntrada * 0.85 ;
                console.log("caso Junior");
                break ;
            
            default :
                console.log("Algo salio mal");
                importe.innerHTML = textoImporte ; 
                mensajeNombre.innerHTML = "Ocurrió un error inesperado; vuelva a intertar más tarde" ;
        }
    }
    error = false ; 
}

btnResumen.addEventListener("click", validarTodo ) ;
btnBorrar.addEventListener("click", borrar ) ;


