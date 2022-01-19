import React from 'react';
import {Modal, ModalBody, ModalFooter} from 'reactstrap';

export const ModalEliminar = ({modalEliminar, productoSeleccionado, peticionDelete, abrirCerrarModalEliminar}) => {
  return <div>
            <Modal isOpen={modalEliminar}>
            <ModalBody>
                ¿Estás seguro que deseas eliminar el producto {productoSeleccionado && productoSeleccionado.id_producto}?
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-danger" onClick={()=>peticionDelete()}>
                    Sí
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={()=>abrirCerrarModalEliminar()}
                >
                    No
                </button>
            </ModalFooter>
            </Modal>  
        </div>;
};
