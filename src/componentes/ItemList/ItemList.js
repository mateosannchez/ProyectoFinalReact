import React from 'react'
import { productos } from "../../Productos/Productos";
import Item from '../Item/Item';


const ItemList = ({ products }) => {

  return (
    <>
      {
        products.map(producto => <Item producto={producto} key={producto.id}/> )
      }
      
    </>

  )
}

export default ItemList