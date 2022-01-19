import React from 'react';
import {Modal, ModalBody, ModalFooter} from 'reactstrap';

export const ModalSinStock = ({modalSinStock,abrirCerrarModalSinStock}) => {
  return <div>
            <Modal isOpen={modalSinStock}>
                <ModalBody>
                    No hay stock para realizar la venta!<br />
                </ModalBody>
                <ModalFooter>
                    <button
                        className="btn btn-danger"
                        onClick={()=>abrirCerrarModalSinStock()}
                    >
                        cerrar
                    </button>
                </ModalFooter>
            </Modal> 
        </div>;
};
