import React from 'react'
import ItemCart from '../Carrito/ItemCart'
import { Link } from 'react-router-dom'
import { useCartContext } from "../../Context/CartContext";

const CartWidget = () => {

  // const { cart } = useCartContext();
   
 
  return (
    <div className='header__der--car'>

        <i className="ri-shopping-cart-line"></i>
        
    </div>

)
}

export default CartWidget