import React from "react";
import { useContext } from "react";
import { CartContext, useCartContext } from "../../Context/CartContext";

import "../../App.css"

const ItemCart = ({ product }) => {
  const { removeProduct, clearCart } = useCartContext();
  return (
    <div>
      <img src={product.IMG} alt="" />
      <div>
        <p>{product.marca} <br />{product.modelo}</p>
        <p>{product.cantidad}</p>
        <p>{product.precio}</p>
        <p>Subtotal: {product.cantidad * product.precio}</p>
        <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        <button className="" onClick={() => clearCart()}>
            Vaciar carrito
          </button>
      </div>
    </div>
  )
}

export default ItemCart