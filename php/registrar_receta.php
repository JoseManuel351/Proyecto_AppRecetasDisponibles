<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    header('Content-Type: application/json');
    
    // Datos de conexión a la base de datos
    $host = 'localhost';
    $usuario = 'root';
    $contraseña = '';
    $base_de_datos = 'recetas';

    // Crear conexión
    $conexion = new mysqli($host, $usuario, $contraseña, $base_de_datos);

    // Verificar si hay errores de conexión
    if ($conexion->connect_error) {
        echo json_encode(["status" => "error", "message" => "Error de conexión: " . $conexion->connect_error]);
        exit();
    }

    // Obtener los datos del formulario y sanitizarlos
    $nombre = htmlspecialchars($_POST['nombre']);
    $porciones = filter_var($_POST['porciones'], FILTER_VALIDATE_INT);

    // Verificar si el producto ya existe
    $consulta_existencia = $conexion->prepare("SELECT COUNT(*) FROM receta WHERE nombre = ?");
    $consulta_existencia->bind_param("s", $nombre);
    $consulta_existencia->execute();
    $consulta_existencia->bind_result($count);
    $consulta_existencia->fetch();
    $consulta_existencia->close();

    if ($count > 0) {
        // Producto ya existe
        echo json_encode(["status" => "error", "message" => "El producto ya existe en la base de datos."]);
    } else {
        // Preparar la consulta SQL para insertar los datos
        $consulta = $conexion->prepare("INSERT INTO receta (nombre, porciones) VALUES (?, ?)");
        $consulta->bind_param("si", $nombre, $porciones);

        // Ejecutar la consulta
        if ($consulta->execute() === TRUE) {
            echo json_encode(["status" => "success", "message" => "Nuevo registro añadido correctamente."]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error: " . $consulta->error]);
        }

        $consulta->close();
    }

    // Cerrar la conexión
    $conexion->close();
}
?>