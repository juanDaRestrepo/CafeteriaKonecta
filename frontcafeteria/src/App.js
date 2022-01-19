import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import axios from 'axios';
import { ModalSinStock } from './components/ModalSinStock';
import { ModalVenta } from './components/ModalVenta';
import { ModalEliminar } from './components/ModalEliminar';
import { ModalInsertar } from './components/ModalInsertar';
import {ModalEditar} from './components/ModalEditar';

function App() {

  const baseUrl = 'http://localhost/CafeteriaKonecta/apiCafeteriaKonecta/';
  
  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalVenta, setModalVenta] = useState(false);
  const [modalSinStock, setModalSinStock] = useState(false);
  const [venta, setVenta] = useState(1);
  const [productoSeleccionado, setProductoSeleccionado ] = useState({
    id_producto:'',
    nombre_producto:'',
    referencia_producto:'',
    precio_producto:'',
    categoria_producto:'',
    stock_producto:'',
    peso_producto:'',
    fecha_creacion_producto:''
  });
  
 

  const handleChange = (e) => {
    const {name, value} = e.target;
    console.log(name);
    setProductoSeleccionado( (prevState) => ({
      ...prevState,
      [name] : value
    }))

    console.log(productoSeleccionado);
  }

  const handleVentaChange = (e) => {
    const {value} = e.target;
    setVenta(value);
    console.log(venta);
  }

  const handleSubmitVenta = () =>{
    
    
    
    setProductoSeleccionado( (prevState) =>

    (
      {
        ...prevState,
        stock_producto : prevState.stock_producto-venta
      } 
    ))
   
    
    setModalVenta(!modalVenta);
    peticionPut();
  }

  const abrirCerrarModalInsertar = () => {
    setModalInsertar(!modalInsertar);
  }

  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  }  

  const abrirCerrarModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  } 

  const abrirCerrarModalVenta = () => {
    setModalVenta(!modalVenta);
  } 

  const abrirCerrarModalSinStock = () => {
    setModalSinStock(!modalSinStock);
  } 

  const peticionGet = async() => {
    await axios.get(baseUrl)
      .then( response => {
        setData(response.data)
      })
      .catch(error=>{
        console.log(error);
      })
  }
  
  const peticionPost = async() => {
    var f = new FormData();
    f.append("nombre_producto", productoSeleccionado.nombre_producto);
    f.append("referencia_producto", productoSeleccionado.referencia_producto);
    f.append("precio_producto", productoSeleccionado.precio_producto);
    f.append("categoria_producto", productoSeleccionado.categoria_producto);
    f.append("stock_producto", productoSeleccionado.stock_producto);
    f.append("fecha_creacion_producto", productoSeleccionado.fecha_creacion_producto);
    f.append("peso_producto", productoSeleccionado.peso_producto);
    f.append("METHOD", "POST");
    await axios.post(baseUrl, f)
      .then( response => {
        console.log(response);
        setData(data.concat(response.data));
        abrirCerrarModalInsertar();
      })
      .catch(error=>{
        console.log(error);
      })
  }

  const peticionPut = async() => {
    var f = new FormData();
    f.append("nombre_producto", productoSeleccionado.nombre_producto);
    f.append("referencia_producto", productoSeleccionado.referencia_producto);
    f.append("precio_producto", productoSeleccionado.precio_producto);
    f.append("categoria_producto", productoSeleccionado.categoria_producto);
    f.append("stock_producto", productoSeleccionado.stock_producto);
    f.append("fecha_creacion_producto", productoSeleccionado.fecha_creacion_producto);
    f.append("peso_producto", productoSeleccionado.peso_producto);
    f.append("METHOD", "PUT");
    await axios.post(baseUrl, f, {params: {id: productoSeleccionado.id_producto}})
      .then( response => {
        var dataNueva = data;
        dataNueva.map(producto => {
          if(producto.id_producto===productoSeleccionado.id_producto){
            producto.nombre_producto=productoSeleccionado.nombre_producto;
            producto.referencia_producto=productoSeleccionado.referencia_producto;
            producto.precio_producto=productoSeleccionado.precio_producto;
            producto.categoria_producto=productoSeleccionado.categoria_producto;
            producto.stock_producto=productoSeleccionado.stock_producto;
            producto.fecha_creacion_producto=productoSeleccionado.fecha_creacion_producto;
            producto.peso_producto=productoSeleccionado.peso_producto;
          }
        })
        setData(dataNueva);
        if(modalEditar===true){
          abrirCerrarModalEditar();
        }
      })
      .catch(error=>{
        console.log(error);
      })
  }

  const peticionDelete=async()=>{
    var f = new FormData();
    f.append("METHOD", "DELETE");
    await axios.post(baseUrl, f, {params: {id: productoSeleccionado.id_producto}})
    .then(response=>{
      setData(data.filter(producto=>producto.id_producto!==productoSeleccionado.id_producto));
      abrirCerrarModalEliminar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const seleccionarProducto = (producto, caso) => {
    setProductoSeleccionado(producto);
    if(caso === "Editar" ){
      abrirCerrarModalEditar();
    }else if(caso === "Eliminar"){
      abrirCerrarModalEliminar();
    }else{
      if(producto.stock_producto>0){
        abrirCerrarModalVenta();
      }else{
        abrirCerrarModalSinStock();
      }
    }
  }

  useEffect( () => {
    peticionGet();
  }, []);

  return (
    /* tabla principal para ver eliminar y editar productos */
    <div className="App" style={{textAlign: 'center'}}>
      <br />
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

      {/* modal para insertar registros de productos */}
        <ModalInsertar 
          modalInsertar={modalInsertar}
          handleChange={handleChange}
          peticionPost={peticionPost}
          abrirCerrarModalInsertar={abrirCerrarModalInsertar}
        />


         {/* modal para modificar registros de productos */}
        <ModalEditar 
          modalEditar={modalEditar} 
          handleChange={handleChange} 
          productoSeleccionado={productoSeleccionado} 
          peticionPut={peticionPut}
          abrirCerrarModalEditar={abrirCerrarModalEditar}
        />

      <ModalEliminar 
        modalEliminar={modalEliminar}
        productoSeleccionado={productoSeleccionado}
        peticionDelete={peticionDelete}
        abrirCerrarModalEliminar={abrirCerrarModalEliminar}
      />

      <ModalVenta 
        modalVenta={modalVenta} 
        productoSeleccionado={productoSeleccionado} 
        handleVentaChange={handleVentaChange} 
        handleSubmitVenta={handleSubmitVenta}
        abrirCerrarModalVenta={abrirCerrarModalVenta}
      /> 

      <ModalSinStock 
        modalSinStock={modalSinStock} 
        abrirCerrarModalSinStock={abrirCerrarModalSinStock}
      />
  </div>  
      
    
  );

  
}

export default App;
