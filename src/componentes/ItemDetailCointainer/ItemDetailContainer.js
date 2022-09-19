import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { productos } from "../../Productos/Productos";
import "../../App.css"
import { useParams } from 'react-router-dom';
import { getDoc, doc, collection } from "firebase/firestore"
import { db } from "../../firebaseConfig"

const ItemDetailContainer = () => {

  const { id } = useParams();
  const [product, setProduct] = useState({});
  //const [loanding, setLoanding] = useState(true);

  const getData = new Promise((resolve, reject) => {
    resolve(productos);
  });
  useEffect(() => {
    getData.then((res) => {
      const item = res.find((resp) => resp.id === parseFloat(id));
      setProduct(item);
    });
  }, []);

  
  // useEffect(() => {
  //    const itemCollection = collection(db, "productos");
  //    const ref = doc(itemCollection, id);
  //    getDoc(ref).then((res) => {
  //      setProduct({id: res.id, ...res.data() });
      
  //    });
  
  //  }, [id])


  
  return (
    <>
      <ItemDetail product={product}></ItemDetail>
    </>
  )
}

export default ItemDetailContainer;


// function ItemDetailConteiner() {
  //   const { id } = useParams();
  //   const [product, setProduct] = useState({});
  //   const [loanding, setLoanding] = useState(true);
  
  //   const getData = new Promise((resolve, reject) => {
  //     resolve(productos);
  //   });
  
  //   useEffect(() => {
  //     getData.then((res) => {
  //       const item = res.find((resp) => resp.id === parseFloat(id));
  //       setProduct(item);
  //     });


// });
