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


  // const getData = new Promise((resolve, reject) => {
  //   resolve(productos);
  // });
  // useEffect(() => {
  //   getData.then((res) => {
  //     const item = res.find((resp) => resp.id === parseFloat(id));
  //     setProduct(item);
  //   });
  // }, []);

  useEffect(() => {
  console.log(id);

 const getDato = async ()  => {
  const docRef = doc(db, "Productos", `${id}`);
const res = await getDoc(docRef);
console.log(res);
if (res.exists()) {
  console.log("Document data:", {id: res.id, ...res.data() });
  setProduct({id: res.id, ...res.data() })
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
 }
 getDato()
}, [id])


  
return (
    <>
      <ItemDetail product={product}></ItemDetail>
    </>
  )
}

export default ItemDetailContainer;

