import React from 'react'
import { Link } from 'react-router-dom';
// import { useContext } from 'react';
import { useCartContext } from '../../Context/CartContext'
import ItemCart from './ItemCart';

const Cart = () => {
    const { cart, totalPrecio } = useCartContext();
    // let history = useNavigate();

    if (cart.length === 0) {
        return (
            <div>
                

                <div className="">
                    <div className="">
                        <h6 className="">
                            Aún no agregaste elementos en el carrito
                        </h6>
                    </div>
                    <div className="">
                        <Link to="/" className=" ">
                            <button>
                                Ir a hacer compras
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        )
    }


    return (

        <>
            {cart.map((product) => (
                <ItemCart key={product.id} product={product} />
            ))}
            <p>total de la compra: $ {totalPrecio()}</p>
            <button className="">
                Volver atrás
            </button>

            <Link to="/checkout" className="">
                <button>Pagar</button>
            </Link>
        </>
    );
};


export default Cart