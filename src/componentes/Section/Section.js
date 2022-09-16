import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemDetailContainer from '../ItemDetailCointainer/ItemDetailContainer'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import CartWidget from '../CartWidget/CartWidget'
import CartProvider from "../../Context/CartContext";
import ItemCart from '../Carrito/ItemCart'
import Cart from '../Carrito/Cart'
import "../../App.css"

const Section = () => {
    return (
        <div>
            <CartProvider>

                <Routes>
                    <Route
                        path='/'
                        element={<ItemListContainer />}
                    />

                    <Route
                        path='/categoria/:categoriaName'
                        element={<ItemListContainer />}
                    />

                    <Route
                        path='/detail/:id'
                        element={<ItemDetailContainer />}
                    />
                    <Route
                        path='/detail/:marca'
                        element={<ItemDetailContainer />}
                    />

                    <Route path='/cart' element={<CartWidget/>} />
                    {/* <Route path='/cart' element={<ItemCart/>}/> */}
                    {/* <Route path='/cart2' element={<Cart/>} /> */}
                    

                </Routes>

            </CartProvider>

        </div>

    )
}

export default Section