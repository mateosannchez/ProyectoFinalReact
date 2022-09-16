import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { productos } from "../../Productos/Productos";
import "../../App.css"
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDocs } from 'firebase/firestore';

const ItemDetailContainer = () => {
  
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const getData = new Promise((resolve, reject) => {
    resolve(productos);
  });

  useEffect(() => {
    getData.then((res) => {
      const item = res.find((resp) => resp.id === parseFloat(id));
      setProduct(item);
    });

  //firestoreyt
  // useEffect(() => {
  //   const querydb = getFirestore();
  //   const queryDoc = doc(querydb, "Productos", id);
  //   getDocs(queryDoc)
  //   .then(res => setProduct({id: res.id, ...res.data()}))
  // }, [id])
  

    
  
  // getData()
    // .finally(() => {
    //   setIsLoading(false)
    // })

  // }, []);
  
  
});

return (
  <>
    {/* {isLoading ? <h5>Cargando...</h5> :  */}
    <ItemDetail product={product}/>
  </>
);

}
export default ItemDetailContainer;
