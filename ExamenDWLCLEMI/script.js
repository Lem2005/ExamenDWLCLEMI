function validarFormulario() {
    const telefono = document.getElementById("telefono").value;
    const regexTelefono = /^\d{3} \d{2} \d{2} \d{2}$/;

    if (!regexTelefono.test(telefono)) {
        alert("Numero de telefono requeridTeléfono debe tener el formato xxx xx xx xx");
        return;
    }

    const password = document.getElementById("password").value;
    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres");
        return;
    }

    if (!document.getElementById("acepta").checked) {
        alert("Debes aceptar los términos");
        return;
    }

    alert("Formulario válido. Puedes seleccionar libros.");
    document.getElementById("librosSection").style.display = "block";
}

function calcularTotal() {
    const precio = parseFloat(document.getElementById("precio").value);
    const iva = parseFloat(document.getElementById("iva").value);

    if (isNaN(precio)) {
        alert("Ingresa un precio válido");
        return;
    }

    const total = precio + (precio * iva);
    document.getElementById("resultado").value = total.toFixed(2);
}

