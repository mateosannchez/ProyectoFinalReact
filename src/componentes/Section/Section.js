import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemDetailContainer from '../ItemDetailCointainer/ItemDetailContainer'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemCart from '../Carrito/ItemCart'
import "../../App.css"
import Form from '../Form/Form'
import CartWidget from '../CartWidget/CartWidget';


const Section = () => {
    return (
        <div>
            

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

                    <Route path='/cart' element={<ItemCart/>} />
                    
                    <Route
                        path='/form' element={<Form/>}
                    />
                    
                </Routes>

            

        </div>

    )
}

export default Section