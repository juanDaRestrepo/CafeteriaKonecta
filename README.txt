Pasos para instalar la prueba:

1. Importar base de datos en mysql.
2. Pegar la carpeta completa del proyecto en la carpeta donde almacena sus proyectos Php.
3. Iniciar servicios de su servidor local.
4. navegar a la carpeta frontcafeteria donde esta react.
5. ejecutar el comando "npm install"
6. ejecutar el comando "npm i bootstrap reactstrap axios" para instalar librerias necesarias (bootstrap, axios, y ventanas modales) 
7. ejecutar el comando npm start

consultas sql solicitadas:

1. SELECT nombre_producto, stock_producto FROM productos ORDER BY stock_producto DESC LIMIT 1.
2. SELECT p.nombre_producto, SUM(v.venta) AS 'ventas' 
    FROM productos AS p
    JOIN ventas AS v
    ON p.id_producto=v.id_producto 
    GROUP BY p.nombre_producto 
    ORDER BY ventas DESC LIMIT 1
