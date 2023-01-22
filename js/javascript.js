// Funcion para ocular menú responsivo

function miFuncion() {
    var x = document.getElementById("barradenavR");
    if (x.className === "barradenavegacion") {
    x.className += " responsive";
    } else {
    x.className = "barradenavegacion";
    }
}

// Scrip para Formulario: validación, prueba el ingreso o no de valores en los campo, devuelve mensaje de error si alguno vacíos//

document.getElementById ('formulariodeContacto').addEventListener("submit", function(e) {
    let emailIngresado = document.getElementById ('email').value;
    let mensajeIngresado = document.getElementById ('mensaje').value;
    if (emailIngresado == 0) {
        document.getElementById('campoObligatorio1').style.display = 'block';     
        document.getElementById('error').style.display = 'block';
        e.preventDefault ();
    } 
    if (mensajeIngresado == 0) {
        document.getElementById('campoObligatorio2').style.display = 'block';     
        document.getElementById('error').style.display = 'block';
        e.preventDefault ();
    }  

});

