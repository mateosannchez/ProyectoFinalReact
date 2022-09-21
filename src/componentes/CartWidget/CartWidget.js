import React from 'react'
import ItemCart from '../Carrito/ItemCart'
import { NavLink } from 'react-router-dom'
import { useCartContext } from "../../Context/CartContext";

const CartWidget = () => {

  const { iconCart } = useCartContext();
   
 
  return (
    <div className='header__der--car'>

        <i className="ri-shopping-cart-line"></i>
        <span className='cartwidget__cant'>{iconCart()}</span>
        
    </div>

    
)
}

export default CartWidget