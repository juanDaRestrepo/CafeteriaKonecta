<?php

include 'bd/BD.php';

header('Access-Control-Allow-Origin: *');

if($_SERVER['REQUEST_METHOD']=='GET'){
    if(isset($_GET['id_producto'])){
        $query="select * from productos where id_producto=".$_GET['id_producto'];
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
    }else{
        $query="select * from productos";
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetchAll()); 
    }
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='STOCK'){
    $query="select nombre_producto, stock_producto from productos order by stock_producto desc limit 1";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
    
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='TOP'){
    $query="SELECT p.nombre_producto, SUM(v.venta) AS 'ventas' 
                FROM productos AS p
                JOIN ventas AS v
                ON p.id_producto=v.id_producto 
                GROUP BY p.nombre_producto 
                ORDER BY ventas DESC LIMIT 1";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
    
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='POST'){
    unset($_POST['METHOD']);
    $nombre_producto=$_POST['nombre_producto'];
    $referencia_producto=$_POST['referencia_producto'];
    $precio_producto=$_POST['precio_producto'];
    $categoria_producto=$_POST['categoria_producto'];
    $stock_producto=$_POST['stock_producto'];
    $fecha_creacion_producto=$_POST['fecha_creacion_producto'];
    $peso_producto=$_POST['peso_producto'];
    $query="insert into productos(nombre_producto, referencia_producto, precio_producto, categoria_producto, stock_producto, fecha_creacion_producto, peso_producto   ) values ('$nombre_producto', '$referencia_producto','$precio_producto', '$categoria_producto', '$stock_producto', '$fecha_creacion_producto', '$peso_producto' )";
    $queryAutoIncrement="select MAX(id_producto) as id_producto from productos";
    $resultado=metodoPost($query, $queryAutoIncrement);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='PUT'){
    unset($_POST['METHOD']);
    $id_producto=$_GET['id_producto'];
    $nombre_producto=$_POST['nombre_producto'];
    $referencia_producto=$_POST['referencia_producto'];
    $precio_producto=$_POST['precio_producto'];
    $categoria_producto=$_POST['categoria_producto'];
    $stock_producto=$_POST['stock_producto'];
    $fecha_creacion_producto=$_POST['fecha_creacion_producto'];
    $peso_producto=$_POST['peso_producto'];
    $query="update productos set nombre_producto='$nombre_producto', referencia_producto='$referencia_producto', precio_producto='$precio_producto', categoria_producto='$categoria_producto', stock_producto='$stock_producto', fecha_creacion_producto='$fecha_creacion_producto', peso_producto='$peso_producto' where id_producto='$id_producto'";
    $resultado=metodoPut($query);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='SELL'){
    unset($_POST['METHOD']);
    $id_producto=$_GET['id_producto'];
    $stock_producto=$_POST['stock_producto'];
    $venta=$_POST['venta_producto'];
    $query="update productos set stock_producto='$stock_producto' where id_producto='$id_producto'";
    $secondQuery ="insert into ventas(id_producto, venta) values ('$id_producto', '$venta' )";
    $resultado=metodoPut($query);
    metodoGet($secondQuery);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='DELETE'){
    unset($_POST['METHOD']);
    $id_producto=$_GET['id_producto'];
    $query="delete from ventas where id_producto='$id_producto'";
    $secondQuery="delete from productos where id_producto='$id_producto'";
    metodoDelete($query);
    $resultado=metodoDelete($secondQuery);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

header("HTTP/1.1 400 Bad Request");


?>