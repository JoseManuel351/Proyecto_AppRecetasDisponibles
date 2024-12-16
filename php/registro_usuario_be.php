<?php
include 'conexion_be.php';
$nombre= $_POST['nombre'];
$correo= $_POST['correo'];
$contrasena= $_POST['contrasena'];

$query ="INSERT INTO usuarios(nombre, correo, contrasena) VALUES ('$nombre','$correo','$contrasena')";


//verificar que el correo no se repita en la bd
$verifiar_correo = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$correo' ");
if(mysqli_num_rows($verifiar_correo) > 0){
    echo'<script>alert("Este correo ya esta registrado");
    window.location = "../index.html";
    </script>
    ';

exit();
}
$ejecutar=mysqli_query($conexion, $query);
if($ejecutar){
    echo'<script>alert("usuario almacenado exitosamente");
    window.location = "../index.html";
    </script>
    ';
}
if($ejecutar){
    echo'<script>alert("intentalo de nuevo usuario no almacenado");
    window.location = "../index.htmlindex.html";
    </script>
    ';
}

myqli_close($conexion);
?>