import React, { useEffect, useState } from "react";
import { productos } from "../../Productos/Productos";
import "../../App.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  const [products, setProducts] = useState([]);

  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });

  useEffect(() => {
    getData.then((data) => setProducts(data));
  }, []);

  return (
    <>
      <ItemList products={products} />
      <section></section>
    </>
  );
};

export default ItemListContainer;
