import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext'
import CantCart from '../Contador/CantCart';

const Cart = () => {
    const { cart, totalPrecio, removeProduct, clear } = useCartContext();

    const total = totalPrecio();

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
                
                <div class="container">
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
    
                                <button className='cart__cant--1'><button className='cart__cant--2'><i class="ri-subtract-line"></i></button>{prod.cantidad}<button className='cart__cant--3'><i class="ri-add-fill"></i></button></button>
     
                                {/* <CantCart/> */}
                            </div>
    
                            <h4 className='cart__precio'>${prod.precio}</h4>
    
                            <button className='cart__borrar' onClick={() => removeProduct(prod.id)}><i class="ri-delete-bin-6-line"></i></button>
                        </div>
    
                    ))}
                    <div className='divider'></div>
                </div>
    
                <div class="container">
                    <div class="row cart__total">
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
            </div>
    )
                        
    

    // return (
    //     
    //             <div className="contenedor container">

    //                 <>
    //                     {cart.map((producto) => (
    //                         <div className="row contProduct">
    //                             <div className="col-1 col-md-1 productDescription">
    //                                 <i
    //                                     className="ri-delete-bin-line"
    //                                     id={producto.item.id}
    //                                     onClick={removeProduct}
    //                                 ></i>
    //                             </div>
    //                             <div className="col col-md-3 productDescription" id="imgCart">
    //                                 <img src={producto.item.imagenId} alt="" />
    //                             </div>
    //                             <div className="col-3 col-md-3 productDescription">
    //                                 <p className="p">{producto.item.title}</p>
    //                             </div>
    //                             <div className="col-2 col-md-1 productDescription">
    //                                 <p className="p">${producto.item.price}</p>
    //                             </div>
    //                             <div className="col-3 col-md-3 productDescription">
    //                                 <input
    //                                     type="button"
    //                                     defaultValue="-"
    //                                     id={producto.item.id}
    //                                     className="contadores"
    //                                     onClick={disminuirCart}
    //                                 />
    //                                 <p step="1" min="1" name="cantidad" className="cantidad p">
    //                                     {producto.quantity}
    //                                 </p>
    //                                 <input
    //                                     type="button"
    //                                     defaultValue="+"
    //                                     id={producto.item.id}
    //                                     className="contadores"
    //                                     onClick={aumentarCart}
    //                                 />
    //                             </div>
    //                             <div className="col-2 col-md-1 productDescription">
    //                                 <p className="p">
    //                                     ${producto.item.price * producto.quantity}
    //                                 </p>
    //                             </div>
    //                         </div>
    //                     ))}
    //                 </>
    //                 <div className="row tabla">
    //                     <div className="col-1 col-md-1 contP">
    //                         <p></p>
    //                     </div>
    //                     <div className="col-1 col-md-3 contP">
    //                         <p></p>
    //                     </div>
    //                     <div className="col-6 col-md-3 contUltimaLinea">
    //                         <button onClick={clear}>clean car</button>
    //                     </div>
    //                     <div className="col col-md-1 contP">
    //                         <p></p>
    //                     </div>
    //                     <div className="col-3 col-md-3 contUltimaLinea">
    //                         <p>Total</p>
    //                     </div>
    //                     <div className="col-2 col-md-1 contUltimaLinea">
    //                         <p>${totalPrecio()}</p>
    //                     </div>
    //                 </div>

    //                 <Link to={`/cart`}>
    //                     <button>Procesando pago...</button>
    //                 </Link>
    //             </div>

    //         )}

    //     </div>
    // )


};


// return (

//     <>
//         {cart.map((product) => (
//             <ItemCart key={product.id} product={product} />
//         ))}
//         <p>total de la compra: $ {totalPrecio()}</p>
//         <button className="">
//             Volver atrás
//         </button>

//         <Link to="/checkout" className="">
//             <button>Pagar</button>
//         </Link>
//     </>
// );


export default Cart