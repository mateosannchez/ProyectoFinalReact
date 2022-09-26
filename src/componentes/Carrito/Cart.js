
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext'
import CantCart from '../Contador/CantCart';
import Form from '../Form/Form';

const Cart = () => {
    const [idCompra, setIdCompra] = useState('');
    const { cart, totalPrecio, removeProduct, clear } = useCartContext();

    const total = totalPrecio();

    const handleId = (id) => {
        setIdCompra(id);
    }

    console.log(idCompra);
    if (idCompra) {
        return <h3>Gracias por comprar tu id es: {idCompra}</h3>
    }

    if (cart.length === 0) {
        return (
            <div className="cart">
                <div >
                    <h6 className="cart__noProduc">
                        Aún no agregaste elementos en el carrito
                    </h6>
                    <Link to="/">
                        <button className='contador1'>
                            Ir a hacer compras
                        </button>
                    </Link>
                </div>

            </div>
        );
    }
    return (

        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
        }}>

            <div className="container">
                {/* <Form /> */}
                <div className='divider'></div>
                {cart.map((prod) => (

                    <div className='cart__block'
                        key={prod.id}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            padding: '8px',
                            margin: '8px',
                        }}
                    >
                        <Link to={`/detail/${prod.id}`}>
                            <img className='cart__img' src={prod.IMG} alt="" />

                        </Link>
                        <h3 className='cart__descrip'>{prod.marca}-{prod.modelo}</h3>
                        <h3>{prod.title}</h3>
                        <div className='cart__cant'>

                            <button className='cart__cant--1'><button className='cart__cant--2'><i className="ri-subtract-line"></i></button>{prod.cantidad}<button className='cart__cant--3'><i className="ri-add-fill"></i></button></button>

                            {/* <CantCart/> */}
                        </div>

                        <h4 className='cart__precio'>${prod.precio}</h4>

                        <button className='cart__borrar' onClick={() => removeProduct(prod.id)}><i className="ri-delete-bin-6-line"></i></button>
                    </div>

                ))}
                <div className='divider'></div>
            </div>

            <div className="container">
                <div className="row cart__total">
                    <div className='col-md-6 cart__total1'>
                        Total:
                    </div>

                    <div className='col-md-6 cart__total2'>
                        ${total}
                    </div>

                </div>
            </div>

            <button className='contador2' onClick={clear}>Borrar todo</button>
            <Link to="">
                <button className='contador1'>
                    Iniciar compra
                </button>
            </Link>
            <Link to="/">
                <button className='btn-link'>
                    Ir a hacer compras
                </button>
            </Link>
            <Form cart={cart}
                total={total}
                clearCart={clear}
                handleId={handleId}
            />
        </div>
    )


};


export default Cart