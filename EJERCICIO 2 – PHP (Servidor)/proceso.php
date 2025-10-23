<?php
 $nombre= $_GET["nombre"];
 $apellidos= $_GET["apellidos"];
 $edad= intval ($_GET["edad"]);
 function comprobarEdad ($nombre, $edad, $apellidos){
    if($edad >= 18)
        echo "Hola $nombre $apellidos eres mayor de edad";
    else
        echo "Hola $nombre $apellidos eres menor de edad";
 }
 comprobarEdad($nombre, $edad, $apellidos);
?>