<?php
session_start();
session_destroy();
header("location: /Proyecto_AppRecetasDisponibles/index.html");
?>