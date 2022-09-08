import React from "react";
import "../../App.css";
import Contador from "../Contador/Contador";

const ItemDetail = ({ product }) => {
  console.log(product);
  const divisa = "$";

  const onAdd = () => {
    console.log("Agregaste al carrito");
  };

  return (
    <div className="container">
      <div className="detail">
        <img src={product?.IMG} alt="" className="detail__img" />
        <div className="content">
          <h5 className="content__ruta">ruta categoria</h5>
          <h1 className="content__title">
            {product?.marca}
            <br />
            {product?.modelo}
          </h1>

          <h2 className="content__price">
            {divisa}
            {product?.precio}
          </h2>
          <p className="content__text">
            Vas a poder aprovechar esta oferta en cualquier producto de la
            tienda.
          </p>
          <h6 className="content__title--t">Talles</h6>
          <select className="content__talle" name="select">
            <option value="talle39">Talle 39</option>
            <option value="talle40">Talle 40</option>
            <option value="talle41">Talle 41</option>
            <option value="talle42">Talle 42</option>
            <option value="talle43">Talle 43</option>
          </select>
          <Contador stock={5} initial={1} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
