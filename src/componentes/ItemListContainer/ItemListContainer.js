import React, { useEffect, useState } from "react";
import "../../App.css"
import Productos from "../../Productos/Productos"
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { db } from '../../firebaseConfig';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = (props) => {

  const { categoriaName } = useParams()
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([])
  
  useEffect(() => {
    setIsLoading(true);
    const itemCollection = collection(db, 'Productos');

    const referencia = categoriaName
        ? query(itemCollection, where('marca', '==', categoriaName))
        : itemCollection;

    getDocs(referencia)
        .then((res) => {
            const products = res.docs.map((prod) => {
                return {
                    id: prod.id,
                    ...prod.data(),
                };
            });
            setItems(products);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setIsLoading(false);
        });
}, [categoriaName]);

  return (
    <>
      <ItemList items={items} />

    </>
  );

};


export default ItemListContainer;