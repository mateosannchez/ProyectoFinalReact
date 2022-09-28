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
