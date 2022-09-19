import React from 'react'
import Cart from './Cart'
import { useCartContext } from '../../Context/CartContext'

function ItemCart () {
    const { cart, edditCart } = useCartContext()

    const aumentarCart = (e) => {
        const id = e.target.id;

        const actualizarCart = [...cart];
        for (let i = 0; i < actualizarCart.length; i++) {
            if (actualizarCart[i].item.id === id) {
                if (actualizarCart[i].item.stock > actualizarCart[i].quantity) {
                    actualizarCart[i].quantity = actualizarCart[i].quantity + 1;
                    edditCart(actualizarCart[i]);
                }

                break;
            }
        }
    }
    const disminuirCart = (e) => {
        const id = e.target.id;

        const actualizarCart = [...cart];
        for (let i = 0; i < actualizarCart.length; i++) {
            if (actualizarCart[i].item.id === id) {
                if (actualizarCart[i].quantity !== 0) {
                    actualizarCart[i].quantity = actualizarCart[i].quantity - 1;
                    edditCart(actualizarCart[i]);
                }

                break;
            }
        }
    }
  return (
    <Cart aumentarCart= { aumentarCart } disminuirCart= { disminuirCart }></Cart>
  )
}

export default ItemCart