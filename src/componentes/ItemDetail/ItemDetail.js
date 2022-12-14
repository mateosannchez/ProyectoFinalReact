import React, { useState, useContext } from 'react';
import "../../App.css"
import Contador from '../Contador/Contador';
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';


const ItemDetail = ({ product }) => {

  const { marca, modelo, precio, IMG, id } = product;

  const [goToCart, setGoToCart] = useState(false)

  const { addProduct } = useCartContext();

  const divisa = "$";
 
  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} al carrito`);
    setGoToCart(true)
    addProduct(product, cantidad)
    
  };

 
  return (
    <div className="conteiner">
        <img src={IMG} alt="" className="detail__img" width="500px" height="600px" />
      <div className="detail">
        <div className="content">
          <h5 className="content__ruta">{marca}</h5>
          <h1 className="content__title">
            {marca}
            <br />
            {modelo}
          </h1>

          <h2 className="content__price">
            {divisa}
            {precio}
          </h2>
          <p className="content__text">
            Vas a poder aprovechar esta oferta en cualquier producto de la
            tienda.
          </p>
          <h6 className="content__title--t">Talles</h6>
          <select className="content__talle" name="select">
            <option value="talle39">Talle 39</option>
            <option value="talle40">Talle 40</option>
            <option value="talle41">Talle 41</option>
            <option value="talle42">Talle 42</option>
            <option value="talle43">Talle 43</option>
          </select>

          {

            goToCart
              ? <Link to="/cart" className='link__carrito'><i className="ri-check-double-line"></i>Ir al carrito</Link>
              : <Contador  stock={5} initial={1} onAdd={onAdd} />
         
          }

      
        </div>
      </div>
    </div>
  );

};


export default ItemDetail;