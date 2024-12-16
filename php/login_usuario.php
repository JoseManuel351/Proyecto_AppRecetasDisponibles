<?php
session_start();
include 'conexion_be.php';

// Verificar que el formulario se ha enviado
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Asegurarse de que los campos de correo y contraseña existen en el array $_POST
    if (isset($_POST['correo']) && isset($_POST['contrasena'])) {
        $correo = $_POST['correo'];
        $contrasena = $_POST['contrasena'];

        // Validar las credenciales en la base de datos
        $validar_login = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$correo' AND contrasena='$contrasena'");

        if (mysqli_num_rows($validar_login) > 0) {
            // Credenciales correctas para acceso a InventarioPrincipal
            if ($correo === 'admin@colicompu' && $contrasena === '123') {
                $_SESSION['loggedin'] = true;
                $_SESSION['correo'] = $correo;
                $_SESSION['usuario'] = $correo;

                header("Location:../pag-principal.php");
            } else {
                $_SESSION['usuario'] = $correo;
                header("Location: ../pag_principal/pag-principal.php");
                exit;
            }
        } else {
            echo '
            <script>
                alert("Usuario inexistente o contraseña equivocada");
                window.location = "../index.html";
            </script>
            ';
            exit;
        }
    } else {
        echo "Por favor, complete todos los campos.";
        exit;
    }
} else {
    echo "Método de solicitud no permitido.";
    exit;
}
?>