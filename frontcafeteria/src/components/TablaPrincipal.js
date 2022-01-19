import React from 'react';

export const TablaPrincipal = ({abrirCerrarModalInsertar, data, seleccionarProducto}) => {
  return <div>
            <button className='btn btn-success' onClick={() => abrirCerrarModalInsertar()}>Insertar</button>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Referencia</th>
                    <th>Precio</th>
                    <th>Categoria</th>
                    <th>Stock</th>
                    <th>Peso</th>
                    <th>Fecha de Creación</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                { data.map( producto => (
                    <tr key={producto.id_producto}>
                    <td>{producto.id_producto}</td>
                    <td>{producto.nombre_producto}</td>
                    <td>{producto.referencia_producto}</td>
                    <td>{producto.precio_producto}</td>
                    <td>{producto.categoria_producto}</td>
                    <td>{producto.stock_producto}</td>
                    <td>{producto.peso_producto}</td>
                    <td>{producto.fecha_creacion_producto}</td>
                    <td>
                        <button className='btn btn-warning' onClick={() => seleccionarProducto(producto, 'Venta')}>Realizar venta</button>
                        <button className='btn btn-primary' onClick={() => seleccionarProducto(producto, 'Editar')}>Editar</button>
                        <button className='btn btn-danger' onClick={() => seleccionarProducto(producto, 'Eliminar')}>Eliminar</button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>;
};
