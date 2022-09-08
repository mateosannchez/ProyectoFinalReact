import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemDetailContainer from '../ItemDetailCointainer/ItemDetailContainer'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Cart from '../Carrito/Cart'
import "../../App.css"

const Section = () => {
    return (
        <div>
            <Routes>
                <Route
                    path='/'
                    element={<ItemListContainer />}
                />
                <Route
                    path='/producto/:productoNombre'
                    element={<ItemListContainer />}
                />
                <Route
                    path='/detail/:idProduc'
                    element={<ItemDetailContainer />}
                />
                 <Route
                    path='/detail/:marca'
                    element={<ItemDetailContainer />}
                />
               
                <Route path='/cart' element={<Cart />} />

            </Routes>
        </div>

    )
}

export default Section