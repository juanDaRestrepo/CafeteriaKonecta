import React from 'react';
import {Modal, ModalBody, ModalFooter} from 'reactstrap';

export const ModalMasStock = ({modalMasStock,abrirCerrarModalMasStock, masStock}) => {
    console.log(masStock)
  return <div>
            <Modal isOpen={modalMasStock}>
                <ModalBody>
                    El producto con mas stock es: {masStock.nombre_producto}, con un stock de: {masStock.stock_producto}<br />
                    
                </ModalBody>
                <ModalFooter>
                    <button
                        className="btn btn-danger"
                        onClick={()=>abrirCerrarModalMasStock()}
                    >
                        cerrar
                    </button>
                </ModalFooter>
            </Modal> 
        </div>;
};