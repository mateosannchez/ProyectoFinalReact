import React, { useEffect, useState } from "react";
import "../../App.css"
import Productos from "../../Productos/Productos"
import ItemList from "../ItemList/ItemList";
import { NavLink } from "react-router-dom";
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
      <div className="container content2">
        <div className="row">
          <div className="col-4 ">
            <div className="content__circle">
              <i className="ri-shopping-cart-line "></i>

            </div>

            <h5 className="content__descrip--title">Envios gratis</h5>
            <p className="content__descrip--subtitle">A todo el pais</p>
          </div>

          <div className="col-4">
            <div className="content__circle">
              <i className="ri-bank-card-line"></i>
            </div>

            <h5 className="content__descrip--title">Paga en 3,6 y 12 cuotas</h5>
            <p className="content__descrip--subtitle">Aceptamos todas las tarjetas</p>
          </div>

          <div className="col-4">

            <div className="content__circle">
              <i className="ri-whatsapp-line"></i>
            </div>

            <h5 className="content__descrip--title">Contactanos</h5>
            <p className="content__descrip--subtitle">Puedes escribirnos 24/7</p>
          </div>
        </div>
      </div>

      <div >
        <h3 className="cont__Titulo">Nuestros productos</h3>
      </div>

      <ItemList items={items} />


      <div className="container content2">
        <div className="row main__img">
          <div className="col-3">
            <div className="">
                <NavLink to={`/categoria/Nike`}><img src="./img/logonike-removebg-preview.png" alt="" width="160px" /> </NavLink> 
            </div>

          </div>

          <div className="col-3">
            <NavLink to={`/categoria/Alexander`}><img src="./img/alex-removebg-preview.png" alt="" width="160px" /></NavLink>  

          </div>

          <div className="col-3">
            <NavLink to={`/categoria/Puma`}>  <img src="./img/logopum-removebg-preview.png" alt="" width="160px" /></NavLink>


          </div>

          <div className="col-3">
            <NavLink to={`/categoria/Vans`}><img src="./img/vans-removebg-preview.png" alt="" width="160px" /></NavLink>  

          </div>
        </div>
      </div>

    </>
  );

};


export default ItemListContainer;