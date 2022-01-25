import React from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

export const ModalEditar = ({modalEditar, handleChange, productoSeleccionado, peticionPut, abrirCerrarModalEditar}) => {
  return <div>
      <Modal isOpen={modalEditar}>
        <ModalHeader>Insertar nuevo producto</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Nombre: </label>
            <br />
            <input type="text" className="form-control" name="nombre_producto" onChange={handleChange} value={productoSeleccionado && productoSeleccionado.nombre_producto} />
            <br />
            <label>Referencia: </label>
            <br />
            <input type="text" className="form-control" name="referencia_producto" onChange={handleChange} value={productoSeleccionado && productoSeleccionado.referencia_producto} />
            <br />
            <label>Precio: </label>
            <br />
            <input type="number" className="form-control" name="precio_producto" onChange={handleChange} value={productoSeleccionado && productoSeleccionado.precio_producto} />
            <br />
            <label>Categoria: </label>
            <br />
            <input type="text" className="form-control" name="categoria_producto" onChange={handleChange} value={productoSeleccionado && productoSeleccionado.categoria_producto} />
            <br /> 
            <label>Stock: </label>
            <br />
            <input type="number" className="form-control" name="stock_producto" onChange={handleChange} value={productoSeleccionado && productoSeleccionado.stock_producto} />
            <br />
            <label>Fecha de creación: </label>
            <br />
            <input type="date" className="form-control" name="fecha_creacion_producto" onChange={handleChange} value={productoSeleccionado && productoSeleccionado.fecha_creacion_producto} />
            <br />
            <label>Peso: </label>
            <br />
            <input type="number" className="form-control" name="peso_producto" onChange={handleChange} value={productoSeleccionado && productoSeleccionado.peso_producto} />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>peticionPut()}>Editar</button>{"   "}
          <button className="btn btn-danger" onClick={()=>abrirCerrarModalEditar()}>Cancelar</button>
        </ModalFooter>
      </Modal>
  </div>;
};
