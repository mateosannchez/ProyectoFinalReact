import React, { useEffect, useState } from "react";
import { productos } from "../../Productos/Productos";
import "../../App.css"
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';


const ItemListContainer = (props) => {

  const { categoriaName } = useParams()
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const getProductos = new Promise((resolve, reject) => {
      
      const prodFil = productos.filter(
        (prod) => prod.marca === categoriaName
      );
      
      setTimeout(() => {
        resolve(categoriaName ? prodFil : productos)
      }, 1000);
    });

    getProductos
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => {
        console.log(error);
      })

    
  }, [categoriaName])

  

  // useEffect(() => {
  //   getData.then((data) => setProducts(data));
  // }, []);

    return (
      <>
        <ItemList products={products} />
        
      </>
    );
  };

  

  export default ItemListContainer;