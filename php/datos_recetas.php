<?php
require_once('tcpdf/tcpdf.php');

// Datos de conexión a la base de datos
$host = 'localhost';
$usuario = 'root';
$contraseña = '';
$base_de_datos = 'recetas';

// Crear conexión
$conexion = new mysqli($host, $usuario, $contraseña, $base_de_datos);

// Verificar si hay errores de conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Verificar la acción solicitada
$accion = isset($_GET['accion']) ? $_GET['accion'] : '';

if ($accion == 'obtener_inventario') {
    // Obtener los datos del inventario
    $consulta = "SELECT id_receta,nombre, porciones FROM receta";
    $resultado = $conexion->query($consulta);

    if ($resultado->num_rows > 0) {
        // Generar las filas de la tabla
        while($fila = $resultado->fetch_assoc()) {
            echo "<tr>";
            echo "<td>" . htmlspecialchars($fila['id_receta']) . "</td>";
            echo "<td>" . htmlspecialchars($fila['nombre']) . "</td>";
            echo "<td>" . htmlspecialchars($fila['porciones']) . "</td>";
            echo "</tr>";
        }
    } else {
        echo "<tr><td colspan='3'>No hay productos en el inventario</td></tr>";
    }

} elseif ($accion == 'generar_pdf') {
    // Obtener los datos del inventario
    $consulta = "SELECT id_receta, nombre, porciones FROM receta";
    $resultado = $conexion->query($consulta);

    $datos_inventario = array();

    if ($resultado->num_rows > 0) {
        while($fila = $resultado->fetch_assoc()) {
            $datos_inventario[] = $fila;
        }
    }

    // Función para generar el PDF del inventario
    function generarPDFInventario($datos) {
        // Crear nuevo objeto TCPDF
        $pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

        // Establecer información del documento
        $pdf->SetCreator(PDF_CREATOR);
        $pdf->SetAuthor('Tu Nombre');
        $pdf->SetTitle('Inventario General');
        $pdf->SetSubject('Inventario');
        $pdf->SetKeywords('TCPDF, PDF, Inventario, Producto');

        // Establecer márgenes
        $pdf->SetMargins(10, 10, 10);
        $pdf->SetHeaderMargin(0);
        $pdf->SetFooterMargin(0);

        // Establecer auto página breaks
        $pdf->SetAutoPageBreak(TRUE, 10);

        // Establecer el tipo de fuente y el tamaño
        $pdf->SetFont('helvetica', '', 12);

        // Agregar una página
        $pdf->AddPage();

        // Encabezado
        $pdf->Cell(0, 10, 'Inventario General', 0, true, 'C', 0, '', 0, false, 'M', 'M');

        // Datos del inventario
        $pdf->Ln(10); // Espacio entre el título y los datos

        $html = '<table border="1">';
        $html .= '<thead>';
        $html .= '<tr>';
        $html .= '<th>ID</th>';
        $html .= '<th>Nombre</th>';
        $html .= '<th>Cantidad</th>';
        $html .= '</tr>';
        $html .= '</thead>';
        $html .= '<tbody>';

        foreach ($datos as $dato) {
            $html .= '<tr>';
            $html .= '<td>' . htmlspecialchars($dato['Id_Producto']) . '</td>';
            $html .= '<td>' . htmlspecialchars($dato['Nom_Producto']) . '</td>';
            $html .= '<td>' . htmlspecialchars($dato['Cantidad']) . '</td>';
            $html .= '</tr>';
        }

        $html .= '</tbody>';
        $html .= '</table>';

        $pdf->writeHTML($html, true, false, true, false, '');

        // Salida del PDF
        return $pdf->Output('Inventario.pdf', 'S');
    }

    // Generar el PDF del inventario
    $pdf_content = generarPDFInventario($datos_inventario);

    // Enviar el PDF al navegador
    header('Content-Type: application/pdf');
    header('Content-Disposition: attachment; filename="Inventario.pdf"');
    echo $pdf_content;

} else {
    echo "Acción no válida.";
}

// Cerrar la conexión
$conexion->close();
?>
