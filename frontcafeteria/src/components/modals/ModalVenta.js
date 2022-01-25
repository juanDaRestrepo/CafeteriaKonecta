import React from 'react';
import {Modal, ModalBody, ModalFooter} from 'reactstrap';

export const ModalVenta = React.memo(({modalVenta, productoSeleccionado, handleVentaChange, peticionSell, abrirCerrarModalVenta}) => {
    
  return <div>
            <Modal isOpen={modalVenta}>
            <ModalBody>
                ¿Cuantos productos desea descontar del stock, tiene ({productoSeleccionado && productoSeleccionado.stock_producto})?<br />
                <label>Stock: </label>
                <br />
                <input type="number" className="form-control" name="stock_producto" onChange={handleVentaChange} min="1" max={productoSeleccionado && productoSeleccionado.stock_producto} />
                <br />
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-danger" onClick={()=>peticionSell()}>
                    descontar
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={()=>abrirCerrarModalVenta()}
                 >
                    cancelar
                </button>
            </ModalFooter>
            </Modal>  
        </div>;
});
