import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext'
import ItemCart from './ItemCart';

const Cart = () => {
    const { cart, totalPrecio } = useCartContext();

    // if (cart.length === 0) {
        return (
            <div>
                {cart.length === 0 ? <div> <p>El carrito está vacio</p><Link to="/">Seguir comprando</Link> </div> : cart.map(product => <ItemCart key={product.id} product={product}/>) }
                <p>Total: {totalPrecio()}</p>
                {/* <p>El carrito está vacio</p>
                <Link to="/">Seguir comprando</Link> */}
            </div>
          )
   //}

  return (
    <div>
        {
            cart.map(product => <ItemCart key={product.id} product={product}/>)
        }
        <p>Total: {totalPrecio()}</p>
    </div>
  )
}

export default Cart