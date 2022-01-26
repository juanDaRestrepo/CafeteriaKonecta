import React from 'react';
import {Modal, ModalBody, ModalFooter,ModalHeader} from 'reactstrap';

export const ModalInsertar = ({modalInsertar, handleChange, peticionPost, abrirCerrarModalInsertar}) => {
    
  return <div>
            <Modal isOpen={modalInsertar}>
                <ModalHeader>Insertar nuevo producto</ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label>Nombre: </label>
                        <br />
                        <input type="text" className="form-control" name="nombre_producto" onChange={handleChange}/>
                        <br />
                        <label>Referencia: </label>
                        <br />
                        <input type="text" className="form-control" name="referencia_producto" onChange={handleChange}/>
                        <br />
                        <label>Precio: </label>
                        <br />
                        <input type="number" className="form-control" name="precio_producto" onChange={handleChange}/>
                        <br />
                        <label>Categoria: </label>
                        <br />
                        <input type="text" className="form-control" name="categoria_producto" onChange={handleChange}/>
                        <br />
                        <label>Stock: </label>
                        <br />
                        <input type="number" className="form-control" name="stock_producto" onChange={handleChange}/>
                        <br />
                        <label>Fecha de creación: </label>
                        <br />
                        <input type="date" className="form-control" name="fecha_creacion_producto" onChange={handleChange}/>
                        <br />
                        <label>Peso: </label>
                        <br />
                        <input type="number" className="form-control" name="peso_producto" onChange={handleChange}/>
                        <br />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary" onClick={()=>peticionPost()}>Insertar</button>{"   "}
                    <button className="btn btn-danger" onClick={()=>abrirCerrarModalInsertar()}>Cancelar</button>
                </ModalFooter>
            </Modal>
        </div>;
};
