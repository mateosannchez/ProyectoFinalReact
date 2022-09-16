import React, { useEffect, useState } from "react";
import { productos } from "../../Productos/Productos";
import "../../App.css"
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = (props) => {

  const { categoriaName } = useParams()
  const [products, setProducts] = useState([]);


  useEffect(() => {

    //primer

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


    //firestoresyt
    //   const querydb = getFirestore();
    //   const queryCollection = collection(querydb, "Productos");
    //   if (categoriaName) {
        
    //     const queryFilter = query(queryCollection, where("categoria", "==", categoriaName))
    //     getDocs(queryCollection)
    //     .then(res => setProducts(res.docs.map(product => ({ id: product.id, ...product.data()}))))
        
    //   } else {
    //     getDocs(queryCollection)
    //     .then(res => setProducts(res.docs.map(product => ({ id: product.id, ...product.data()}))))
        
    //   }
    // }, [categoriaName])

  

    // useEffect(() => {
    //   getData.then((data) => setProducts(data));
    // }, []);

  });
  
  return (
    <>
      <ItemList products={products} />
      
    </>
  );
}

  

  export default ItemListContainer;