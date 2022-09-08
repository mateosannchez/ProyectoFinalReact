import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { productos } from "../../Productos/Productos";
import "../../App.css"
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
  
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getData = new Promise((resolve, reject) => {
      resolve(productos);
    });
    getData.then((res) => {
      const item = res.find((resp) => resp.id === parseFloat(id));
      setProduct(item);
    });
  }, []);
  
  console.log(product)
  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};

export default ItemDetailContainer
