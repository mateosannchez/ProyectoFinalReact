import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import ItemCart from '../Carrito/ItemCart'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    // const {totalProduc} = useCartContext();
  return (
    <div className='header__der--car'>

        <i className="ri-shopping-cart-line"></i>
        {/* <span>{totalProduc() || ""}</span> */}
        
    </div>

)
}

export default CartWidget