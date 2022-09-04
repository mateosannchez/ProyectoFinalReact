import React, { useEffect, useState } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import { productos } from "../../Productos/Productos";
import "../../App.css"

const llamado = {productos}

const ItemDetailContainer = () => {

  const [data, setData] = useState({})

  
  useEffect(() => {
    const getData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos)
      }, 3000);
    })
    getData.then(resolve => setData(resolve))
  },[])
  
  
  return (
    <div className='detalle__grid'>
      <ItemDetail data={data} />
    </div>
  )
}

export default ItemDetailContainer