import {
  addDoc,
  collection,
  doc,
  getFirestore,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../../firebaseConfig';
import { useCartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom";

const Form = ({ handleId }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [Email, setEmail] = useState('');
  const [Provincia, setProvincia] = useState('');
  const [Ciudad, setCiudad] = useState('');
  const [Postal, setPostal] = useState('');
  const [Correo, setCorreo] = useState('');
  const [Retiro, setRetiro] = useState('');
  const { cart, clear} = useCartContext();


  const handleSubmit = (event) => {
    event.preventDefault();
    const orden = {
      buyer: {
        nombre: nombre,
        apellido: apellido,
        email: Email,
        provincia: Provincia,
        ciudad: Ciudad,
        codigopostal: Postal,
        correo: Correo,
        retirar: Retiro,

      },
      //items: cart.map(product => ({ id: product.id, marca: product.marca, modelo: product.modelo, precio: product.precio, categoria: product.categoria })),
      //total: total,
      date: serverTimestamp(),
    };

  
    const ordersCollection = collection(db, 'Ordenes');

    addDoc(ordersCollection, orden).then((res) => {
      handleId(res.id);
      clear();
      updateprod();
    });

  };


  const updateprod = () => {
    const orderDoc = doc(db, 'Ordenes', '');
    updateDoc(orderDoc, {});
  };

  const handleChangeNombre = (event) => {
    //console.log(event.target.value);
    setNombre(event.target.value);
  };

  const handleChangeApellido = (event) => {
    setApellido(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeProv = (event) => {
    setProvincia(event.target.value);
  };

  const handleChangeCiudad = (event) => {
    setCiudad(event.target.value);
  };

  const handleChangePostal = (event) => {
    setPostal(event.target.value);
  };

  const handleChangeCorreo = (event) => {
    setCorreo(event.target.value);
  };

  const handleChangeRetiro = (event) => {
    setRetiro(event.target.value);
  };

  return (

    <div className='form' onSubmit={handleSubmit} >
      <form action="" >
        <div>
          <h3 className='form__title'>Datos de contacto</h3>
          <input className='form-control'
            type="email"
            placeholder="Email"
            name="Email"
            value={Email}
            onChange={handleChangeEmail}
          />
        </div>
        <div>
          <h3 className='form__title'>Datos del destinatario</h3>
          <input className='form-control'
            type="text"
            placeholder="Nombre"
            name="nombre"
            value={nombre}
            onChange={handleChangeNombre}
          />
          <input className='form-control'
            type="text"
            placeholder="Apellido"
            name="apellido"
            value={apellido}
            onChange={handleChangeApellido}
          />

        </div>
        <div>
          <h3 className='form__title'>Domicilio del destinatario</h3>
          <input className='form-control'
            type="text"
            placeholder="Provincia"
            name="provincia"
            value={Provincia}
            onChange={handleChangeProv}
          />
          <input className='form-control'
            type="text"
            placeholder="Ciudad"
            name="ciudad"
            value={Ciudad}
            onChange={handleChangeCiudad}
          />
          <input className='form-control'
            type="text"
            placeholder="Código postal"
            name="Postal"
            value={Postal}
            onChange={handleChangePostal}
          />
        </div>
        <div>
          <h3 className='form__title'>Entrega</h3>

          <h6 className='form__subtitle'><i className="ri-takeaway-line"></i> Envio a domicilio</h6>
          <div className='form__entrega'>
            <div className="form__selector">
              <input className='form__radio'
                type="radio"
                name="Entrega"
                value={Correo}
                onChange={handleChangeCorreo}
              />
            </div>
            <div>
              <span>
                <h5 className='form__precio--correo'>Gratis</h5>
                <div className='form__title--correo'>Correo argentino - Envio a domicilio</div>
              </span>
            </div>
          </div>

          <h6 className='form__subtitle'><i className="ri-map-pin-line"></i> Retiro</h6>
          <div className='form__entrega'>
            <div className="form__selector">
              <input className='form__radio'
                type="radio"
                name="Entrega"
                value={Retiro}
                onChange={handleChangeRetiro}
              />
            </div>
            <div>
              <span>
                <h5 className='form__precio--correo'>Gratis</h5>
                <div className='form__title--correo'>Puntos de retiro</div>
              </span>
            </div>
          </div>
        </div>

        <button  className='contador1'>Realizar el pedido</button>
      </form>
    </div>

  )
}

export default Form;


    //     <div className="contenedor">
    //   <div className="contCheckOut">
    //     {cart.length === 0 ? (
    //       <div className="contNoHayProductos">
    //         <h5>Your cart is empty.</h5>
    //         <Link to={`/Alerta-Bihotza`}>
    //           <button>Return to the store</button>
    //         </Link>
    //       </div>
    //     ) : (
    //       <form>
    //         <div className="tituloForm">
    //           <h2>Billing details</h2>
    //         </div>
    //         <div className="nombreYapellido">
    //           <div>
    //             <label htmlhtmlFor="">Nombre</label>
    //             <input
    //               type="text"
    //               name="nombre"
    //             //   defaultValue={formData.nombre}
    //             />
    //           </div>
    //           <div>
    //             <label htmlhtmlFor="">Apellido</label>
    //             <input
    //               type="text"
    //               name="apellido"
    //             //   defaultValue={formData.apellido}
    //             />
    //           </div>
    //         </div>

    //         <div className="emailYtelefono">
    //           <div>
    //             <label htmlhtmlFor="">Email</label>
    //             <input
    //               type="email"
    //               name="email"
    //             //   defaultValue={formData.email}
    //             />
    //           </div>
    //           <div>
    //             <label htmlhtmlFor="">Telefono</label>
    //             <input
    //               type="text"
    //               name="telefono"
    //             //   defaultValue={formData.telefono}
    //             />
    //           </div>
    //         </div>

    //         <div className="contDireccion">
    //           <div>
    //             <label htmlhtmlFor="">Revalidar Email</label>
    //             <input
    //               type="email"
    //               name="revalidarEmail"
    //             //   defaultValue={formData.revalidarEmail}
    //             />
    //           </div>
    //         </div>

    //         <div className="contDireccion">
    //           <div>
    //             <label htmlhtmlFor="">Direccion</label>
    //             <input
    //               type="text"
    //               name="direccion"
    //             //   defaultValue={formData.direccion}
    //             />
    //           </div>
    //         </div>

    //         <div className="ciudadYlocalidad">
    //           <div>
    //             <label htmlhtmlFor="">Ciudad</label>
    //             <input
    //               type="text"
    //               name="ciudad"
    //             //   defaultValue={formData.ciudad}
    //             />
    //           </div>
    //           <div>
    //             <label htmlhtmlFor="">Localidad</label>
    //             <input
    //               type="text"
    //               name="localidad"
    //             //   defaultValue={formData.localidad}
    //             />
    //           </div>
    //           <div>
    //             <label htmlhtmlFor="">Codigo Postal</label>
    //             <input
    //               type="text"
    //               name="codigoPostal"
    //             //   defaultValue={formData.codigoPostal}
    //             />
    //           </div>
    //         </div>

    //         <div className="contDetalleCompra">
    //           <div className="descripcionCompra">
    //             <h2>Your order</h2>
    //           </div>
    //           <div className="titulos">
    //             <h3>Product</h3>
    //             <h3>Total</h3>
    //           </div>

    //           {cart.map((producto) => (
    //             <div key={producto.item.id} className="descripcionCompra">
    //               <p>
    //                 {producto.item.title} x {producto.quantity}
    //               </p>
    //               <p>${producto.item.price * producto.quantity}</p>
    //             </div>
    //           ))}
    //           <div className="descripcionCompra">
    //             <p>Subtotal</p>
    //             <p>${totalPrecio()}</p>
    //           </div>
    //           <div className="descripcionCompra ultimaLinea">
    //             <p>Total</p>
    //             <p>${totalPrecio()}</p>
    //           </div>
    //           <div className=" contRealizarCompra">
    //             <p></p>
    //             <button>Make to order</button>
    //           </div>
    //         </div>
    //       </form>
    //     )}
    //   </div>
    // </div>