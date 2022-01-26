import React from 'react';
import {Modal, ModalBody, ModalFooter} from 'reactstrap';

export const ModalMasVendido = ({modalMasVendido,abrirCerrarModalMasVendido, masVendido}) => {
    
  return <div>
            <Modal isOpen={modalMasVendido}>
                <ModalBody>
                     El producto mas vendido es: {masVendido.nombre_producto}, se han vendido: {masVendido.ventas} 
                    
                    <br />
                </ModalBody>
                <ModalFooter>
                    <button
                        className="btn btn-danger"
                        onClick={()=>abrirCerrarModalMasVendido()}
                    >
                        cerrar
                    </button>
                </ModalFooter>
            </Modal> 
        </div>;
};